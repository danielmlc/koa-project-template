
async function GetUser (ctx) {
  if (ctx.session.user) {
    ctx.session.refresh()
    ctx.body = [
      {
        userName: 'malongchang',
        name: '马龙昌'
      }
    ]
  }
}

async function CreateUser (ctx) {
  const user = ctx.request.body
  // const result = await ctx.model.User.create(user)
  ctx.body = user
}

async function UserLogin (ctx) {
  let flag = false
  if (ctx.request.body) {
    const { name, password } = ctx.request.body
    if (name === 'admin' && password === 'qwe123') {
      ctx.session.user = {
        userName: 'malongchang',
        password: 'qwe123'
      }
      flag = true
    }
  }
  ctx.body = flag
}

async function UserLoginOut (ctx) {
  ctx.session = {}
  ctx.body = 1
}

module.exports = {
  GetUser,
  CreateUser,
  UserLogin,
  UserLoginOut
}
