const { cartFormatError } = require('../constant/err.type')

const validator = async (ctx, next) => {
    try {
      ctx.verifyParams({
        goods_id:'number',
      })
    } catch (err) {
      console.error(err)
      cartFormatError.result = err
      return ctx.app.emit('error', cartFormatError, ctx)
    }

    await next()
  }
module.exports = {
  validator,
}
