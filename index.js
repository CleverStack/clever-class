try {
  require('babel/register')({
    stage: 0,
    extensions: ['.es6']
  });
} catch(e){}

module.exports = require('./lib/Class.es6');
