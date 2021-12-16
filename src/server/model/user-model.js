const Sequelize = require('sequelize')

// 用户管理表
module.exports = {
  name: 'sUser',
  fields: {
    id: { type: Sequelize.STRING(50), allowNull: false, primaryKey: true, defaultFn: 'id' },
    name: { type: Sequelize.STRING(64), allowNull: true, unique: true }, // 用户名
    loginId: { type: Sequelize.STRING(50), allowNull: true, unique: true, field: 'login_id' }, // 登录名
    phoneNumber: { type: Sequelize.STRING(20), allowNull: true, unique: true, field: 'phone_number' }, // 手机号
    email: { type: Sequelize.STRING(50), allowNull: true }, // 邮箱
    password: { type: Sequelize.STRING(100), allowNull: true }, // 密码
    isAdmin: { type: Sequelize.INTEGER(1), allowNull: true, defaultValue: 0, field: 'is_admin' }, // 密码
    remark: { type: Sequelize.STRING(500), allowNull: true }, // 备注
    isRemoved: { type: Sequelize.INTEGER(1), allowNull: true, defaultValue: 0, field: 'is_removed' },
    creatorName: { type: Sequelize.STRING(64), allowNull: true, field: 'creator_name', defaultFn: 'userName' },
    createdAt: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW, field: 'created_at' },
    modifierId: { type: Sequelize.STRING(50), allowNull: true, field: 'modifier_id', defaultEqual: 'creatorId', updateFn: 'userId' },
    modifierName: { type: Sequelize.STRING(64), allowNull: true, field: 'modifier_name', defaultFn: 'userName', updateFn: 'userName' },
    updatedAt: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW, field: 'updated_at' },
    creatorId: { type: Sequelize.STRING(50), allowNull: true, field: 'creator_id', defaultFn: 'userId' },
    version: { type: Sequelize.BIGINT, allowNull: true }
  },
  uniques: {
    props: ['loginId'],
    memo: '登录名'
  }
}
