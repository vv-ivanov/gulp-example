'use strict';
/**
 * Содержит пути к библиотекам, установленных с помощью Yarn или NPM и компилирующихся в vendor.min.(css|js)
 */
module.exports = {
    styles: [
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme.css'

    ],
    scripts: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.min.js'
    ]
}