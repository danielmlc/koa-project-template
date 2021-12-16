
const { entity } = require('orm-sequelize-utils/src')
const user = require('./user-model')

async function getModels (sequelize) {
  const models = {}
  models.user = entity(sequelize, user)
  return models
}

module.exports = {
  getModels
}
