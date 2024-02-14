// не переписывать
// данный файл сгенерирован автоматически

const src = path.join(__dirname, 'src/')

module.exports = () => ({
  plugins: [
    new module_federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './App11': src + 'App11',
        './App12': src + 'App12',
        './init': src + 'index',
        './styles': src + 'styles',
      },
      shared: {
        'react': { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
})
