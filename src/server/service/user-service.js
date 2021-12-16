
async function GetUser (ctx) {
  // const result = await ctx.model.User.findAll()
  ctx.body = 1111
}

async function CreateUser (ctx) {
  const user = ctx.request.body
  // const result = await ctx.model.User.create(user)
  ctx.body = user
}

module.exports = {
  GetUser,
  CreateUser
}
