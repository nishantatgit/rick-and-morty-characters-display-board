module.exports = {
  target: 'web',
  entry: {
    client: './src/client/index.tsx',
  },
  output: {
    path: `${__dirname}/public`,
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
};
