const webpack = require('webpack');

module.exports = {
  // 其他配置...
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}; 