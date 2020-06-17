const Serverless = require('serverless-http');
const Koa = require('koa');
const Cors = require('koa-cors');

const Router = require('./router')

const App = new Koa();

App.use(Cors());
App.use(Router);

module.exports = App
module.exports.handler = Serverless(App);