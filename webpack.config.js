const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const { NODE_ENV } = process.env;

module.exports = {
    watch: NODE_ENV === 'development',
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    plugins: [
        new WebpackShellPlugin({
          onBuildEnd: ['npm run run:dev']
        })
      ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    },
    externals: [nodeExternals()]
}