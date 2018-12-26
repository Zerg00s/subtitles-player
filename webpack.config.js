const path = require('path');
const MiniCss = require('mini-css-extract-plugin');

module.exports = (env = {}, argv = {}) => {
    const config = {
        // cache: true,
        // mode: argv.mode || "development",   // we default to development when no 'mode' arg is passed
        mode: argv.mode || 'production', // we default to production  when no 'mode' arg is passed
        entry: {
            style: path.join(__dirname, '/styles', "style.scss"),
            'index.js': path.join(__dirname, "/scripts", "index.tsx"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[name]"
        },
        devtool: "source-map", // controls if and how source maps are generated.
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader', 'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        // TODO: add css minifications
                        // TODO: add source maps for the .sccs files
                        MiniCss.loader, // #3 // Extracts .css file from the .js fine
                        "css-loader",   // #2
                        "sass-loader"   // #1 
                    ]
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ["awesome-typescript-loader"]
                }
            ]
        },
        plugins: [
            new MiniCss({})
        ],
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        }
    }

    return config;
};