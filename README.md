This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1.Install

### npm

```
npm i
or
npm i --legacy-peer-deps
```


## 2.Start

```sh
npm start
```

## 3.Build

```sh
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## i18n 
To get translations from the code, run the following command:

```sh
npm run intl:extract
```
Script will extract all the messages from the code and put them into the `public/locales/source/translation.json` file.
From that file, you can copy the messages to the `public/locales/fr/translation.json` file and translate them.