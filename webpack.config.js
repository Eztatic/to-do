const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const entries = ['index', 'project', 'task'];

const entry = entries.reduce((acc, name) => {
  acc[name] = {
    import: `./src/js/${name}.js`,
    dependOn: 'shared',
  }
  return acc;
}, {});
entry.shared = './src/style.css';


const config = {
    entry: entry,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new CopyWebpackPlugin({
            patterns: [
              {from: 'src/icons', to: 'icons'},
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
