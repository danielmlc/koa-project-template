const os = require('os')
function getIPAdress () {
  const networkInterfaces = os.networkInterfaces()
  for (const devname in networkInterfaces) {
    const iface = networkInterfaces[devname]
    for (let index = 0; index < iface.length; index++) {
      const alias = iface[index]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

module.exports = {
  getIPAdress
}
