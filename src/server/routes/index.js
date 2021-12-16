const { userRouterRegist } = require('./user-router')

const routerRegist = function (router) {
  userRouterRegist(router)
}

module.exports = routerRegist
