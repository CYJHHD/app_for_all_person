const Router = require('koa-router')

const {auth , hadAdminPermission }= require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')

const router = new Router({ prefix: '/goods' })

const {upload} = require('../controller/goods.controller')

router.post('/upload',auth , hadAdminPermission, upload)

router.post('/', auth, hadAdminPermission, validator, (ctx) =>{
    ctx.body="发布商品成功"
})

module.exports = router