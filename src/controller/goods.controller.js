const path = require('path')

const {
    fileUploadError,
    unSupportedFileType,
  } = require('../constant/err.type')

class GoodsController {
    async upload(ctx, next) {
        const { file } = ctx.request.files
        // console.log(ctx.request.files.file)
        const fileTypes = ['image/jpeg', 'image/png']
        if (file) {
            if (!fileTypes.includes(file.type)) {
                return ctx.app.emit('error', unSupportedFileType, ctx)
                //最好用formidable 这样还是会上传只是返回的是一个错误罢了
            }
            ctx.body = {
              code: 0,
              message: '商品图片上传成功',
              result: {
                goods_img: path.basename(file.path),
              },
            }
          } else {
            return ctx.app.emit('error', fileUploadError, ctx)
          }
    }
  }
  
  module.exports = new GoodsController()