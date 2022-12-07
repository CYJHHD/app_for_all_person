const Router = require('koa-router')

const {auth , hadAdminPermission }= require('../middleware/auth.middleware')

const router = new Router({ prefix: '/goods' })

const {upload} = require('../controller/goods.controller')

router.post('/upload',auth , hadAdminPermission, upload)

module.exports = router