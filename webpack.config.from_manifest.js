// не переписывать
// данный файл сгенерирован автоматически

const src = path.join(__dirname, './src')

module.exports = ({ dev }) => ({
	plugins: [
		new module_federation({
      name: 'host',
      filename: 'remote_entry.js',
			exposes: {
'./t1': src + '/a1',
'./t2': src + '/a2',
'./t3': src + '/a3'
}, 
			remotes: {
'./r1': `${dev ? 'http://localhost' : 'https://prod'}:8003/remote_entry.js`
}, 
			shared: {
'react': { singleton: true },
'react-dom': { singleton: true }
}, 
    }),
	],

	resolve: {
		alias: {
'~types': src + './src/types',
'~config': src + './src/config',
'~decorators': src + './src/decorators',
'~file_data_creators': src + './src/file_data_creators',
'~bd': src + './src/bd',
'~modules': src + './src/modules',
'~utils': src + './src/utils',
'~fs': src + './src/fs'
}, 
	},
})