var defaultItemMap = {
    entry: defEntryRoot + "/index." + defaultEntryExt,
    target: 'app.js'
};
var rules = [
    {
        test: /\.ts(x?)$/,
        exclude: /(node_modules|dist)/,
        use: ['awesome-typescript-loader']
    }
];
var webpackConfigDevDefaults = {
    mode: 'development',
    cache: true,
    devtool: appConf.devtool || 'source-map',
    module: { rules: rules },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
};