const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 如果你有自定义的Webpack配置，确保它们没有问题
    cache: false,
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.done.tap('MyPlugin', (stats) => {
            console.log('Webpack build completed');
          });
        }
      }
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  },
  chainWebpack: (config) => {
    // 如果你有链式配置，确保它们没有问题
  },
  devServer: {
    overlay: true, // 在浏览器中显示错误
    clientLogLevel: 'debug', // 启用调试日志
  },
  outputDir: 'docs' // 指定输出目录为docs
})
