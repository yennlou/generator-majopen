const mix = require('laravel-mix')
require('mix-html-builder')
require('laravel-mix-tailwind')

mix
  .js('./src/pen/pen.js', 'public/')
  .sass('./src/styles.scss', 'public/')
  .tailwind()
  .html({
    htmlRoot: './src/index.html',
    partialRoot: './src',
    output: 'public'
  })

mix.browserSync({
  proxy: false,
  server: {
    baseDir: './public/'
  },
  notify: false
})
