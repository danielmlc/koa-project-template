const userService = require('../service/user-service')
const commonService = require('../service/common-service')
const userRouterRegist = function (router) {
  router.get('/', async (ctx, next) => {
    commonService.defaultService(ctx)
  })
  router.get('/user', async (ctx, next) => {
    userService.GetUser(ctx)
  })
}

module.exports = {
  userRouterRegist
}
