/* webpack配置入口 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const prodConfig = require('./webpack.prod.config')
const devConfig = require('./webpack.dev.config')

module.exports = (env, argv) => {
  console.log(env, 'env!!!')
  console.log(argv, 'argv!!!!')
}