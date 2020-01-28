# ServeSmart
An intuitive solution for a modern POS platform.

## Things to Note
### Web Dependencies
Because we are building a tablet application, and assuming nobody owns said tablet, we will run the development server in a web browser. Web dependencies have been added to the project to accomplish this.

## Crash Course in React Native Magic
### JSX
JSX is essentially "HTML in JavaScript" and is incredibly convenient. With JSX:
1. We create JavaScript classes (components) 
2. Classes have a render() function which returns nested HTML representing that component
3. The component can now be used elsewhere in the code as a single tag </>

### Babel
Babel is the transpiler that converts JSX into native code. The process is as follows:
1. JSX is transpiled into JavaScript commands
2. The plain JavaScript is sent to the JS Core (a JavaScript engine built into React)
3. The engine converts the code into IOS or Android native code

This is the magic behind React Native!\
*The config file for Babel `.babel.config.js` is in the root directory. Custom presets can be added when necessary.*

## Steps for setup
### Install Node
If you do not have Node.js installed, download the latest version [here](https://nodejs.org/en/).

### Install Expo CLI
Expo is the server that launches the app's development environment. Run the command `npm install -g expo-cli`. If you already have Expo installed, this command will ensure you have the latest version (do it).

### Install Format and Linting Plugins
This project uses Prettier and ESLint extensions to standardize format. This is a great way to avoid bugs down the road and keep code consistent among team members. Linters are a pain to set up and come with several configuration files; however, I've already done this.

**Prettier**
> Prettier is a tool that autoformats code. When you save the code (CTRL-S), it will align and reformat automatically.\
If using VSCode, install the Prettier plugin (by Esben Petersen) for the workspace. Next, go to your Settings and search for "formatOnSave" and ensure it is enabled. Then, search for "prettier single quote" and ensure both boxes are checked.

*The config file for Prettier `.prettierrc` is in the root directory. Custom rules can be added when necessary.*

**ESLint**
> ESLint statically analyzes your code to quickly identify problems and errors. This project uses the [Airbnb style guide](https://github.com/airbnb/javascript).\
If using VSCode, install the ESLint plugin (by Dirk Baeumer) for the workspace. Next, go to your Settings and search for "eslint enable" and ensure ESLint is enabled for JavaScript files.

*The config file for ESLint `.eslintrc.json` is in the root directory. Custom rules can be added when necessary.*

## Before Beginning Work
Be sure to **never** work from the master branch! Always ensure you are working from a branch before starting or committing code.

## Run the Damn Thing!
Scripts to run the project
```
cd serve-smart
npm install
expo start --web
```
The project will launch in the browser with the Expo Developer Tools. Wait a minute, and Webpack will launch a new tab serving the project.
