/* 提取的基础配置文件 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //输出文件
    filename: "[name].[chunkhash:12].js",
    resolve: { // 设置模块如何被解析
      // extension 自动解析确定的扩展, 能够使用户在引入模块时不带扩展
      extensions: ['.js', '.ts', '.tsx', '.json'], // tsx就是用typescript写的jsx文件
      alias: {
        '@': resolve('src')
      }
    },
    module: { // 关于模块的配置
      rules: [ // 模块规则(配置loader、解析器等选项)
        {
          test: /\.tsx?$/i, // 正则匹配文件
          include: [ // 源文件目录下的文件进行编译
            path.resolve(__dirname, 'src')
          ],
          use: [
            {}
          ]
        }
      ]
    }
  }
}