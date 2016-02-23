from invoke import task, run
import contextlib
import os
import shutil


@task
def site():
    """ Compiles examples and builds project site. """
    run("mkdocs build --clean", echo=True)

    root = os.getcwd()
    with chdir(os.path.join(root, "examples", "todomvc")):
        lein("cljsbuild once")
        shutil.copytree("resources",
                        os.path.join(root, "site", "examples", "todomvc"))


# ################################################### COMMON TASKS
# @task
# def clean():
#     """ Cleans build artifacts. """
#     lein("clean")
#
# ################################################### DEVELOPMENT TASKS
# @task
# def repl():
#     """ [For development] Starts REPL. REPL allows to perform common tasks (including tests running) without lein startup overhead. """
#     lein("repl")
#
# ################################################### PRODUCTION TASKS
# @task()
# def uberjar():
#     """ Builds app uberjar. To run the app: java -jar <path to compiled standalone jar>"""
#     lein("uberjar")
#
# @task()
# def mac():
#     """ Packages uberjar as a Mac OS app."""
#     packager = os.path.join(run("/usr/libexec/java_home").stdout.rstrip(), "bin/javapackager")
#     run('{0} -deploy -native image'
#         ' -outdir out -outfile pickings.app'
#         ' -srcfiles target/pickings-0.1.0-SNAPSHOT-standalone.jar -appclass pickings.main'
#         ' -name "Pickings" -title "Pickings"'
#         ' -Bruntime= -Bicon=resources/icon.icns'.format(packager),
#         echo=True)
#
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
