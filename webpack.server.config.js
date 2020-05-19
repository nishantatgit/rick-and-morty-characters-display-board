const nodeExternals =  require('webpack-node-externals');
module.exports = {
  target: 'node',
  entry: {
    server: "./src/server/server.tsx"
  },
  output: {
    path: `${__dirname}`
  },
  module: {
    rules : [
      {
        test : /\.tsx$|\.ts$|\.js$/,
        use: [ 'ts-loader' ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  externals : [nodeExternals()]
}