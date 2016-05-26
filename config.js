module.exports = {
    devServer: {
      publicPath: "/",
      stats: { colors: true },
      port: 3000,
      contentBase: 'build',
      inline: true,
      proxy: {
        '/basic/trip': {
          target: 'http://10.100.112.198:9970',
          secure: false
        }
      }
    }
}
