const Router = require('koa-router')


const { auth } = require('../middleware/auth.middleware')

const { validator } = require('../middleware/cart.middleware')

const {
  add,
  findAll,
  update,
} = require('../controller/cart.controller')


const router = new Router({ prefix: '/carts' })


router.post('/', auth, validator, add)

router.get('/', auth, findAll)

router.patch('/:id',auth,validator({
      number: { type: 'number', required: false },
      selected: { type: 'bool', required: false },
    }),update)
 
module.exports = router
