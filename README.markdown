# Tauranga Web Meetup Webpack 2 Demo #

## Example
This repo contains a simple step by step example of how to start using Webpack.
The aim here is not necessarily just to show you how to use Webpack but also to introduce some concepts that are useful for building modern web apps.


## Topics
In particular this example touches on:
- Bundling
- Transpilation
- Optimization using minification, etc.
- Dynamic module/code loading
- Extracting common code bundles

## Omissions
Unfortunately I didn't have enough time to talk about:
- Unit testing
- Bundling other assets, images, CSS, etc.
- CSS preprocessors like LESS
- Transpiling other languages like Typescript

## Disclaimer
I certainly am not claiming to be an expert on Webpack. I've got a few side projects up and running with it but I am not currently using Webpack in production so your mileage will definitely vary.

I do have a reasonable amount of experience using a wide variety of build tools for different environments and currently am using Browserify in production for much of what is presented in this example.

## Sources and helpful links

### Bundlers
There are, as always, many different ways to skin this particular cat and I'd encourage you, if you're interested, to look at the other tools available:

- [Browserify](http://browserify.org/)
- [Brunch](http://brunch.io/)
- [Broccoli](http://broccolijs.com/)
- [Rollup](https://rollupjs.org/), a JavaScript only bundler.
- [JSPM](http://jspm.io/), a package manager which also can create optimized bundles.

### Package managers
While [NPM](https://www.npmjs.com/) (Node Package Manager) is the underlying package manager used in this repo you might have noticed that this project includes a `yarn.lock` file, [Yarn](https://yarnpkg.com/lang/en/) is essentially version of NPM with better performance, security and _some_ guarantees of [reproducibility](https://spin.atomicobject.com/2016/12/16/reproducible-builds-npm-yarn/).

Another alternative is [JSPM](http://jspm.io/).

### Webpack
[Webpack]((https://webpack.js.org/)) is the focus of this presentation as it makes it easy to use some of the more complex techniques that are discussed such as code-splitting and dynamic imports while also being relatively simple to learn and use these days.

An excellent source of information about Webpack is [Survive JS](https://survivejs.com/webpack/introduction/) which is written by one of the core Webpack team members. It has a much more nuts and bolts approach to using Webpack in contrast to the high level concepts in the official documentation.

I would recommend that you use only Webpack 2 or better still the recently released version 3.

#### Tools that use Webpack
- Facebook have created [create-react-app](https://github.com/facebookincubator/create-react-app) specifically for getting a React web app up and running fast, it uses Webpack under the hood.
- Version 5.1 of Ruby on Rails (RoR) also includes [Webpacker](https://github.com/rails/webpacker) that wraps Webpack for Rails apps.
- The [Laravel](https://laravel.com/docs/5.4/mix) PHP web framework also provides a thin layer over Webpack.

### General
There are number of guides these days and collations of useful technologies and links
- [Grab front end guide](https://github.com/grab/front-end-guide)