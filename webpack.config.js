const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackFunc = env => {
  console.log(env);
  return {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    watch: env === "production" ? false : true,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.join(__dirname, "public")
              }
            },
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css"
      })
    ],
    devtool: "eval",
    devServer: {
      contentBase: path.join(__dirname, "public")
    }
  };
};

module.exports = webpackFunc;
