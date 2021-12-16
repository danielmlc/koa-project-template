async function defaultService(ctx) {
  // const result = await ctx.model.User.create(user)
  ctx.redirect('/home-page.html')
}

module.exports = {
  defaultService
}
