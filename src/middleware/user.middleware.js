const { getUerInfo } = require('../service/user.service')
const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    // 合法性
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body)
        ctx.status = 400
        ctx.body = {
        code: '10001',
        message: '用户名或密码为空',
        result: '',
        }
        return
    }
  
    await next()
  }
  const verifyUser = async (ctx, next) => {
    const { user_name } = ctx.request.body
  
    // 合理性
    if (getUerInfo({ user_name })) {
        ctx.status = 409
        ctx.body = {
        code: '10002',
        message: '用户已经存在',
        result: '',
        }
        return
    }
  
    await next()
  }

module.exports = {
    userValidator,
    verifyUser,
}