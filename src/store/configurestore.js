if(process.env.NODE_ENV === 'production')
  module.exports = require('./configurestore.production');
else
  module.exports = require('./configureStore.dev');