# Documentation

Project uses [MkDocs](http://www.mkdocs.org/) to generate documentation static site.

Serve site locally with automatic build: `mkdocs serve`

Build site into site folder: `mkdocs build --clean`

# Deploying

Deploy to Clojars: `lein deploy clojars`

Deploy site to gh-pages branch: `ghp-import -p site`