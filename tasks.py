from invoke import task, run
import contextlib
import os
import shutil


@task
def site():
    """ Compiles examples and builds project site. """
    run("mkdocs build --clean", echo=True)

    site_path = os.path.join(os.getcwd(), "site")
    for name in os.listdir("examples"):
        example_path = os.path.join("examples", name)
        if os.path.isdir(example_path) and os.path.isfile(os.path.join(example_path, "project.clj")):
            with chdir(example_path):
                lein("clean")
                lein("cljsbuild once min")
                shutil.copytree(os.path.join("resources", "public"),
                                os.path.join(site_path, "examples", name))


################################################### HELPERS
@contextlib.contextmanager
def chdir(dirname):
    curdir = os.getcwd()
    try:
        os.chdir(dirname)
        print("current dir: %s" % dirname)
        yield
    finally:
        os.chdir(curdir)


def lein(args):
    run("lein {0}".format(args), echo=True)
