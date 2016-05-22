# Tests

Autorun Clojure tests: `lein test-refresh`

Autorun ClojureScript tests: `lein doo phantom test auto`

# Documentation

Project uses [MkDocs](http://www.mkdocs.org/) with [Cinder](https://github.com/chrissimpkins/cinder) theme and [PlantUML](http://plantuml.com/) to generate documentation static site.
[Codox](https://github.com/weavejester/codox) is used to generate API reference.
Tasks are scripted using [PyInvoke](http://www.pyinvoke.org/).

Serve site pages locally with automatic build (but it won't work for index page): `mkdocs serve`

Build only site pages: `inv mkdocs`

Build API reference into site folder: `inv api`

Build graphs into site folder: `inv graphs`

Build examples into site folder: `inv examples`

Build the whole site: `inv site`

# Deploying

Deploy to Clojars: `lein deploy clojars`

Deploy site to gh-pages branch: `ghp-import -p site`