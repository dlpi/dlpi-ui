const express = require('express')
const proxy = require('http-proxy-middleware')
const webpack = require('webpack')
const config = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

let app = express()
let compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

app.use('/api', proxy({
  target: 'http://localhost:3000',
  changeOrigin: true,
  ws: true,
  pathRewrite: {'^/api': '/'}
}))

app.use(express.static(`${__dirname}/static`))

let server = app.listen(8080, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(`dlpi-ui running on http://${host}:${port}`)
})
