const path = require('path');

module.exports = {
  mode: 'development',
  entry: './111.ts',
  output: {
    path: path.resolve(__dirname, 'dist/single'),
    filename: 'bundle5.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
