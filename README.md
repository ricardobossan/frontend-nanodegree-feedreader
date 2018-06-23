# Project: Front-End Nanodegree Feed Reader

==============================================================
# NOTE TO SELF (ERASE AT PROJECT CONCLUSION)
See the `Documentation` section of the [code review by Udacity](https://review.udacity.com/#!/reviews/1290550), on the [Classic Arcade Game project](C:\Users\ricar\arcade-game).

==============================================================

## Building The Project With Building Tool

### Node.js and Npm (Node Package Manager)

* Install [Node.js](https://nodejs.org/en/)
* Install the latest version of [npm](https://www.npmjs.com/get-npm) via command line:
```
$ npm install npm@latest -g
```

* To initialize a node.js project, run this at the top-level directory of your project:

```
$ npm init
```
_Answer the questions that pop up on the terminal, to create a basic `package.json` file._

* Install the task runner [Gulp.js](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/getting-started.md) globally:

```
$ npm install --global gulp-cli
```
* Install locally the npm packages I'm going to use for this project (including the Gulp package), in your devDependencies:

	* [Gulp](https://www.npmjs.com/package/gulp)
	* [Browsersync](https://www.npmjs.com/package/browser-sync), to create a server and reload the browser automaticaly

```
$ npm --install gulp browser-sync --save-dev
```


* Install globally the [Eslint](https://www.npmjs.com/package/eslint)linter


```
$ npm install -g eslint
```

* Then move to the `home directory` for your projects and run this command:


```
$ eslint --init
```

_It will create an `eslintrc.json` file, which will contain the configurations for all your projects located at the `home directory`._

* If you want to create special eslint configurations for a project, just move to that project's directory run `eslint --init`, to configure a `eslintrc.json` file there

## Running The Build Tool