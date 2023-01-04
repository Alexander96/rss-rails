# Ruby on Rails RSS Feed project talking to RSS Service written in Go

The goal of the project is to fetch RSS feed from the GO service and display it in the browser

Things you may want to cover:

* Ruby version
ruby 3.2.0

* System dependencies

Rails 7.0.4
Node v19.3.0
Yarn 1.22.19

* Configuration
```
bundle install
bin/rails javascript:install:esbuild
bin/rails css:install:tailwind
```

* How to run the test suite
Currently only one test is written for checking if data is fetched on the root page
Run with
```
rspec spec/articles_spec.rb
```
It runs a selenium test using Capybara and Rspec

* Deployment instructions

Currently the project is suitable only for development. It is not production ready.
Development can be started with
```
bin/dev
```

Docker file is also created. There is a problem with the service running in Docker.
The URL of the Golang RSS Service should be ENV var so when running the service in Docker it can be set to docker.for.mac.host.internal so it can resolve localhost properly.

Build the service with docker:

```
docker build -t rss-rails .
docker run -d -p 3000:3000 -t rss-rails
```

