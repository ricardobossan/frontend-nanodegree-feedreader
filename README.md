# Project: Front-End Nanodegree Feed Reader

## Funcionality

Feed Reader site made for implementing TDD with Jasmine.

## Running the Feed Reader

Double-click or press enter on `./src/index.html`. Then click on the feed to navigate to them. The tests are visible at the bottom of the page.

## Building The Project With a Building Tool

#### Node.js and Npm (Node Package Manager)

Install [Node.js](https://nodejs.org/en/).

Install the latest version of [npm](https://www.npmjs.com/get-npm) via command line:

```
$ npm install npm@latest -g
```

To initialize a node.js project, run this at the top-level directory of your project:

```
$ npm init
```
Answer the questions that pop up on the terminal, to create a basic `package.json` file.

Install the task runner [Gulp.js](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md) globally:

```
$ npm install --global gulp-cli
```
 Install locally the npm packages I'm going to use for this project (including the Gulp package), in your devDependencies:

* [Gulp](https://www.npmjs.com/package/gulp)
* [Browsersync](https://www.npmjs.com/package/browser-sync) (to create a server and reload the browser automaticaly)

```
$ npm --install gulp browser-sync --save-dev
```


Install globally the [Eslint](https://www.npmjs.com/package/eslint) linter:


```
$ npm install -g eslint
```

Then move to the `home directory` for your projects and run this command:


```
$ eslint --init
```

It will create an `eslintrc.json` file, which will contain the configurations for all your projects located at the `home directory`.

If you want to create special eslint configurations for a project, just move to that project's directory run `eslint --init`, to configure a `eslintrc.json` file there.

#### Gulp Configuration

On the command line run:

```
$ touch gulpfile.js
```

Open the `gulpfile.js` in your IDE.

Tequire the Gulp and Browsersync packages.

```
var gulp = require('gulp');
var browsersync = require('browser-sync').create();
```

Then set it's default task to watch the js files in the `src` directory:

```
gulp.task('default', () => {
	// Reloads browser
	gulp.watch('./src/**/*.js').on('change', browsersync.reload);
});
```

Create a server for Browsersync, inside the `default` task:

```
gulp.task('default', () => {
	// Reloads browser
	gulp.watch('./src/**/*.js').on('change', browsersync.reload);

	// Server
	browsersync.init({
		server: './src', // browsersync will serve files in this directory
		port: 3000,
		index: 'index.html',
		ui: false
	});
});
```

Create the `dist` task, to move all non build files to the `dist` folder:

```
gulp.task('dist', function() {
	gulp.src('./src/**/*');
	gulp.src('./*.md')
		.pipe(gulp.dest('./dist'));
});
```

#### Running The Build Tool

* run the `default` task, to automatically reload the browser window when a js file is modified (upon save). On the command line, enter:

```
$ gulp
```

* When the project is ready, run the `dist` task, to move all non build files to the `dist` directory:

```
$ gulp dist
```

