const { getUerInfo } = require('../service/user.service')
const { userFormateError, userAlreadyExited, userRegisterError } = require('../constant/err.type')
const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    // 合法性
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body)
        ctx.app.emit('error', userFormateError, ctx)
        return
    }
  
    await next()
  }
  const verifyUser = async (ctx, next) => {
    const { user_name } = ctx.request.body
  
    // 合理性
    try {
        const res = await getUerInfo({ user_name })
        if(res){
            console.error('用户名已经存在',{user_name})
            ctx.app.emit('error', userAlreadyExited, ctx)
            return
        }
    } catch (error) {
        ctx.app.emit('error', userRegisterError, ctx)
        return
    }
  
    await next()
  }

module.exports = {
    userValidator,
    verifyUser,
}