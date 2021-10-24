import path from 'path';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin/dist/clean-webpack-plugin';
import webpack from "webpack";

export default {
    mode: 'development',
    entry: {
        app: './client/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        // https: {
        //     key: fs.readFileSync('server/conf/key.pem'),
        //     cert: fs.readFileSync('server/conf/cert.pem')
        // },
        // allowedHosts?
        // bonjour?
        // client?,
        // compress?,
        // devMiddleware?,
        // headers?,
        // historyApiFallback?,
        // host?,
        // hot?,
        // http2?,
        // https?,
        // ipc?,
        // liveReload?,
        // magicHtml?,
        // onAfterSetupMiddleware?,
        // onBeforeSetupMiddleware?,
        // onListening?,
        open: true
        // port?,
        // proxy?,
        // setupExitSignals?,
        // static?,
        // watchFiles?,
        // webSocketServer?
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'client/views/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};