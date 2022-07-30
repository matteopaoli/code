var webpack = require("webpack");
module.exports = {
    mode: 'development',
	node: {
		__dirname: false,
		__filename: false
	},
	entry: {
		bundle0: ["./index.js"],
	},
	output: {
		filename: "[name].js"
	},
	plugins: [
		new webpack.BannerPlugin("banner is a string"),
		new webpack.BannerPlugin(() => "banner is a function"),
	]
};