/* eslint-disable max-len */
const Sequelize = require('sequelize')
const { decrypt } = require('./aes')
let _sequelize
module.exports = {
  initMySql: _config => {
    if (_config.datasource && _config.datasource.username) _config.datasource.username = decrypt(_config.datasource.username)
    if (_config.datasource && _config.datasource.password) _config.datasource.password = decrypt(_config.datasource.password)
    const config = Object.assign(
      {
        pool: { max: 5, idle: 30000 },
        logging: true,
        dialect: 'mysql',
        timezone: '+08:00',
        dialectOptions: {
          // 时间格式化
          dateStrings: true,
          typeCast: true,
          decimalNumbers: true
        },
        benchmark: true
      },
      _config.datasource
    )
    if (_sequelize) {
      return _sequelize
    }
    return new Sequelize(config)
  },
  mysqlSequelize: () => {
    return _sequelize
  }
}
