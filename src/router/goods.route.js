const Router = require('koa-router')

const {auth , hadAdminPermission }= require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')

const router = new Router({ prefix: '/goods' })

const {upload, create} = require('../controller/goods.controller')

router.post('/upload',auth , hadAdminPermission, upload)

router.post('/', auth, hadAdminPermission, validator, create)

module.exports = router