from invoke import task, run, call
import contextlib
import os
import shutil


@task
def mkdocs(clean=False):
    """ Only build site pages using MkDocs.
    :param clean: should site folder be emptied before build?
    """
    # use readme file for rendering index page
    index_path = os.path.join("docs", "index.md")
    index_backup_path = "index.md_original"

    with backed_up_file(index_path, index_backup_path):
        shutil.copy2("README.md", index_path)
        run("mkdocs build" + (" --clean" if clean else ""), echo=True)


@task
def graphs():
    """ Compiles graphs into project site folder. """
    full_site_path = os.path.join(os.getcwd(), "site")
    run("plantuml -tsvg -o {0} {1}".format(os.path.join(full_site_path, "graphs"),
                                           os.path.join("docs", "graphs")),
        echo=True)


@task
def api():
    """ Compiles API reference for Carry and its contrib projects into site folder. """
    full_site_path = os.path.join(os.getcwd(), "site")
    shutil.rmtree(os.path.join(full_site_path, "api"))

    # core
    lein("codox")

    # contrib projects
    for project_name in os.listdir("contrib"):
        project_path = os.path.join("contrib", project_name)
        if os.path.isfile(os.path.join(project_path, "project.clj")):
            with chdir(project_path):
                lein("codox")
                shutil.copytree("api", os.path.join(full_site_path, "api", project_name))


@task
def examples():
    """ Compiles examples into project site folder. """
    full_site_path = os.path.join(os.getcwd(), "site")

    for example_name in os.listdir("examples"):
        example_path = os.path.join("examples", example_name)
        if os.path.isfile(os.path.join(example_path, "project.clj")):
            with chdir(example_path):
                lein("clean")

                if example_name == "todomvc":
                    lein("cljsbuild-min")
                else:
                    lein("cljsbuild once min")

                shutil.copytree(os.path.join("resources", "public"),
                                os.path.join(full_site_path, "examples", example_name))


@task(post=[call(mkdocs, clean=True), call(graphs), call(api), call(examples)])
def site():
    """ Cleans site folder, builds project site, compiles graphs and examples into site folder. """
    pass


################################################### Helpers
@contextlib.contextmanager
def backed_up_file(filepath, backup_path):
    """ File will be returned to its initial state on context exit. """
    with temp_file(backup_path):
        try:
            print("copy " + filepath + " to backup " + backup_path)
            shutil.copy2(filepath, backup_path)
            yield
        finally:
            print("recover " + filepath + " from backup " + backup_path)
            shutil.copy2(backup_path, filepath)


@contextlib.contextmanager
def temp_file(filepath):
    try:
        print("create temp file " + filepath)
        open(filepath, 'w').close()
        yield
    finally:
        print("remove temp file " + filepath)
        os.remove(filepath)


@contextlib.contextmanager
def chdir(dirname):
    curdir = os.getcwd()
    try:
        os.chdir(dirname)
        print("current dir: " + dirname)
        yield
    finally:
        os.chdir(curdir)


def lein(args):
    run("lein {0}".format(args), echo=True)
