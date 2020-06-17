import Serverless from 'serverless-http'
import Koa from 'koa'
import Cors from 'koa-cors'

import Router from './router'

const App = new Koa();

App.use(Cors());
App.use(Router);

export default App

module.exports.handler = Serverless(App);