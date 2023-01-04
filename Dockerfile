FROM ruby:3.2.0

WORKDIR /rails
COPY . /rails

RUN apt-get update -qq \
&& apt-get install -y curl build-essential libpq-dev
RUN apt-get update && apt-get install -y \
    software-properties-common \
    npm
RUN npm install npm@latest -g && \
    npm install n -g && \
    n latest

RUN bundle install
RUN npm install -g yarn
RUN /rails/bin/rails javascript:install:esbuild
RUN /rails/bin/rails css:install:tailwind

ENTRYPOINT [ "/rails/entrypoint.sh" ]
EXPOSE 3000/tcp
