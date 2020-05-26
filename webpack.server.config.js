const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node',
  entry: {
    server: './src/server/server.tsx',
  },
  output: {
    path: `${__dirname}`,
  },
  module: {
    rules: [
      {
        test: /\.tsx$|\.ts$|\.js$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: [nodeExternals()],
};
