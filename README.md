# test-application

> A Vue.js project based on the webpack template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```

## Committing Process

1. Any work done should be done either in develop (if only 1 person working on), new branch or new feature branch
2. After testing and ensuring the application works, merge to master
3. Copy assets folder
4. Run 'npm run build'
5. Copy assets folder to dist folder upon successful build
6. Run 'git subtree push --prefix dist origin gh-pages' to push dist folder to branch 'gh-pages' for 'live'

## Launching App

1. Prerequisite: Please ensure you have git, node and npm installed
2. Install all the dependencies via: 'npm install'
3. Run application via: 'npm run serve'
4. You should see the app running at : [localhost](http://localhost:8080/)

## Demo Link

[Demo](https://svn1991.github.io/test-application/)


## TODO

1. Add better production process so that assets get automatically copied over and links are adjusted well
2. More detailed comments and better documentation structure

## Future Aims

1. Will look into adding more features for own practice
2. If there are any suggestions, please feel free to open an issue/features