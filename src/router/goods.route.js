const Router = require('koa-router')

const {auth , hadAdminPermission }= require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')

const router = new Router({ prefix: '/goods' })

const {upload, create, update, remove, restore} = require('../controller/goods.controller')

router.post('/upload',auth , hadAdminPermission, upload)

router.post('/', auth, hadAdminPermission, validator, create)

router.put('/:id', auth, hadAdminPermission, validator, update)

// router.delete('/:id', auth, hadAdminPermission, remove)

router.post('/:id/off', auth, hadAdminPermission, remove)

router.post('/:id/on', auth, hadAdminPermission, restore)

module.exports = router