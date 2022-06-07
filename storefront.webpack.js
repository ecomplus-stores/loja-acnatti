const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config'),
      './html/DiscountApplier.html': path.resolve(__dirname, 'template/js/custom-js/html/DiscountApplier.html')      
    }
  }
})

