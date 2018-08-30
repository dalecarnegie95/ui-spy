const mongoose = require('mongoose')

mongoose.connect('mongodb://lite:lite123@ds237389.mlab.com:37389/ui-spy-release', () => {
  console.log('mongodb connected')
})

module.exports = mongoose
