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
        if os.path.isdir(os.path.join("examples", name)):
            with chdir(os.path.join("examples", name)):
                lein("clean")
                lein("cljsbuild once min")
                shutil.copytree(os.path.join("resources", "public"),
                                os.path.join(site_path, "examples", name))


################################################### HELPERS
@contextlib.contextmanager
def chdir(dirname=None):
    curdir = os.getcwd()
    try:
        if dirname is not None:
            os.chdir(dirname)
        yield
    finally:
        os.chdir(curdir)


def lein(args):
    run("lein {0}".format(args), echo=True)
