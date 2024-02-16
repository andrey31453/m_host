// не переписывать
// данный файл сгенерирован автоматически
const src = path.join(__dirname, 'src/')

module.exports = {
	plugins: [
		new module_federation({
      name: 'host',
      filename: 'remote_entry.js',
      exposes: {
        './App11': src + 'App11',
      },
			exposes: {
				'./t1': src + 'a1', 
				'./t2': src + 'a2', 
				'./t3': src + 'a3'
			},
			remotes: {
				'./r11': 'http://localhost:8001/remote_entry.js'
			},
      shared: {
				'react': { singleton: true },
        'react-dom': { singleton: true },
				
      },
    }),
	],
}