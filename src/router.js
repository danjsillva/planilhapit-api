import Router from 'koa-router'

import AssetController from './controllers/AssetController'

const router = new Router();

router.get('/', ctx => ctx.body = "Hello World")

router.get('/assets/:label', AssetController.show)

export default router.routes()
