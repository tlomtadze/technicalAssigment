module.exports = {
    entry: "./src/scripts/app.ts",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: __dirname + "/public"
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: { importLoaders: 1 } },
                {
                  loader: 'postcss-loader',
                  options:{
                    plugins: (loader) => [
                      require('autoprefixer')({
                        browsers: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
                      })
                    ]
                  }
                },
                'sass-loader'
              ]
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(gif|png|ttf|jpe?g|svg)$/i,
            use: [
                {
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
                },
            ]
        }
    ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      }

};