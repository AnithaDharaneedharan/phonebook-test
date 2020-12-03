const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    
  ],
  plugins: ['@babel/plugin-transform-runtime']
}