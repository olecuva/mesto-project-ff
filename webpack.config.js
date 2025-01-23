const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключаем плагин для работы с HTML-файлами
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключаем плагин для регулярного удаления содержимого dist при сборке
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // подключите к проекту mini-css-extract-plugin

// module.exports — это синтаксис экспорта в Node.js
module.exports = {
	entry: { main: './src/scripts/index.js' }, // точка входа webpack — файл index.js
	output: {
		path: path.resolve(__dirname, 'dist'), // точка выхода, куда сохранится файл после сборки
		filename: 'main.js', // файл, куда будет собираться весь js
		publicPath: '',
	},
	mode: 'development', // добавлен режим разработчика
	devServer: {
		static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
		compress: true, // это ускорит загрузку в режиме разработки
		port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, его можно поменять

		open: true, // сайт открывается сам при запуске npm run dev
	},
	module: {
		rules: [
			// rules — массив правил
			{
				// объект правил для бабеля
				test: /\.js$/, // регулярное выражение, которое ищет все js файлы
				use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
				exclude: '/node_modules/', // исключает папку node_modules, файлы в ней обрабатывать не нужно
			},
			{
				// объект правил для подключения изображений
				// регулярное выражение, которое ищет все файлы с такими расширениями
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash].[ext]',
				}
			},
			{
				// объект правил для подключения шрифтов
				// регулярное выражение, которое ищет все файлы с такими расширениями
				test: /\.(woff(2)?|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[hash].[ext]',
				},
			},
			{
				// объект правил для CSS-файлов
				test: /\.css$/,
				// при обработке этих файлов нужно использовать
				// MiniCssExtractPlugin.loader и css-loader
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
}
