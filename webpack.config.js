// не переписывать
// данный файл сгенерирован автоматически

const { merge } = require('webpack-merge')

const template = require('./webpack.config.template')
const generate = require('../generate/webpack.config.generate_from_manifest')
const local = require('./webpack.config.local')

module.exports = (props) =>
  merge(template(props), generate(props), local(props))
