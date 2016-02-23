# Documentation

Project uses [MkDocs](http://www.mkdocs.org/) to generate documentation static site.

Serve site without examples locally with automatic build: `mkdocs serve`

Build site without examples into site folder: `mkdocs build --clean`

Build site with examples (requires [PyInvoke](http://www.pyinvoke.org/)): `inv site`

# Deploying

Deploy to Clojars: `lein deploy clojars`

Deploy site to gh-pages branch: `ghp-import -p site`