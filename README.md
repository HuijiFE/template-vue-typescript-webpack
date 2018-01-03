# Template Vue TypeScript Webpack

> A Webpack template base on TypeScript for Vue.js

## Build Setup

```bash
# install dependencies
npm install
# or
npm run frame

# if failed at the chromedriver@X.XX.X install: `node install.js`, try:
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

# if failed at the node-sass@X.XX.X install: `node scripts/build.js`, try:
npm rebuild node-sass
# or
npm install node-sass --sass-binary-site=https://npm.taobao.org/mirrors/node-sass/

# if failed at node-gyp rebuild: `gyp ERR! stack Error: not found: make`, try:
sudo apt-get install -y build-essential

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the
[guide](http://vuejs-templates.github.io/webpack/) and
[docs for vue-loader](http://vuejs.github.io/vue-loader).
