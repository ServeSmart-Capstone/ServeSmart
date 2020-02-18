# ServeSmart
An intuitive solution for a modern POS platform.

## Before Starting
### Android Studio
Because we are building a tablet application, and assuming nobody owns said tablet, we will run an AVD (Android Virtual Device) to emulate our code on a virtual tablet. These are downloaded and used with Android Studio. A step by step guide to installing and configuring Android Studio can be found [here](https://facebook.github.io/react-native/docs/getting-started). Be sure to choose the React Native CLI Quickstart tab.\

### Specific Emulator
When prompted, you will be tasked with choosing a specific emulator. This project uses the Nexus 7 (2013 model, 7.02" screen, 1920x1200 resolution). Select landscape orientation after this.

### Branching
If you are unfamiliar with Git, please read [this guide](https://dev.to/dhruv/essential-git-commands-every-developer-should-know-2fl). Be sure to **never** work from the master branch! **Always** ensure you are working from a remote branch before starting, changing, or committing code.

Run `git status` to view your current branch.\
Run `git branch -r` to view all remote branches.\
Run `git checkout <branch_name>` to switch to a remote branch.

## Crash Course in React Native
### JSX
JSX is essentially "HTML in JavaScript" and is incredibly convenient. With JSX:
1. We create JavaScript functions (components)
2. Functions return nested HTML representing that component
3. The component can now be used elsewhere in the code as a single tag </>

*One thing to note is that React Native uses components rather than native HTML elements. For example, a `<div>` is replaced with `<View>` and a `<p>` is replaced with `<Text>`. You can find more about basic React Native components in the [docs](https://facebook.github.io/react-native/docs/components-and-apis#basic-components).*

### Babel
Babel is the transpiler that converts JSX into native code. The process is as follows:
1. JSX is transpiled into JavaScript commands
2. The plain JavaScript is sent to the JS Core (a JavaScript engine built into React)
3. The engine converts the code into IOS or Android native code

Using these, we can write applications for iOS and Android devices with a single code base.\
*The config file for Babel `.babel.config.js` is in the root directory. Custom presets can be added when necessary.*

## Steps for setup
### Install Dependencies
As mentioned in the Android Studio guide above, you will need Node, the React Native command line interface, Python2, a JDK, and Android Studio. Python3 is also compatible.

### Configure Format and Linting Plugins
This project uses Prettier and ESLint extensions to standardize format. This is a great way to avoid bugs down the road and keep code consistent among team members. Linters are a pain to set up and come with several configuration files; however, I've already done this.

**Prettier**
> Prettier is a tool that autoformats code. When you save the code (CTRL-S), it will align and reformat automatically.\
If using VSCode, install the Prettier plugin (by Esben Petersen) for the workspace. Next, go to your Settings and search for "formatOnSave" and ensure it is enabled. Then, search for "prettier single quote" and ensure both boxes are checked.

*The config file for Prettier `.prettierrc` is in the root directory. Custom rules can be added when necessary.*

**ESLint**
> ESLint statically analyzes your code to quickly identify problems and errors. This project uses the [Airbnb style guide](https://github.com/airbnb/javascript).\
If using VSCode, install the ESLint plugin (by Dirk Baeumer) for the workspace. Next, go to your Settings and search for "eslint enable" and ensure ESLint is enabled for JavaScript files.

*The config file for ESLint `.eslintrc.json` is in the root directory. Custom rules can be added when necessary.*

## Run the Damn Thing!
To run the project, first make sure you have the emulator open. Then run these scripts in the root directory of the project:
```
yarn install
yarn run android
```
