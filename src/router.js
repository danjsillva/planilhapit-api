const Router = require('koa-router');

const AssetController = require('./controllers/AssetController')

const router = new Router();

router.get('/', ctx => ctx.body = "Hello World")

router.get('/assets/:label', AssetController.show)

module.exports = router.routes()
