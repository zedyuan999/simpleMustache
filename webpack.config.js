const path = require("path");
module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"), // 入口, 可以为相对路径, 当然绝对路径也没错
	output: {
		// 输出配置
		path: path.join(__dirname, "./dist"), // 输出的目录
		filename: "index.js", // 输出的文件名
	},
	mode: "development",
	devServer: {
		// contentBase: path.join(__dirname, "www"),
		port: 3000,
		hot: true,
		publicPath: "/",
	},
};
