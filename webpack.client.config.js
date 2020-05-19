module.exports = {
  entry : {
     client: './src/index.ts'
  },
  output : {
    path : `${__dirname}/public`,
  },
  module: {
    rules: [
      {
        test: /\.tsx$|\.ts$|\.js$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'dependencies',
          chunks: 'initial',
        },
      },
    },
  },
}