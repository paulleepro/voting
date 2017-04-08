// borrowed from here: http://stackoverflow.com/questions/5778245/expressjs-how-to-structure-an-application/7350875#7350875

if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test'){
  var dotenv = require('dotenv');
  dotenv.load()
  exports.currentEnv = process.env.NODE_ENV
} else {
  exports.currentEnv = 'production'
}

exports.appName = "voting";

// either Heroku's URL or create my own
exports.db = {URL: process.env.MONGODB_URI ||
  "mongodb://localhost:27017/"+exports.appName.toLowerCase()+"_"+exports.currentEnv}

exports.secret = process.env.SESSION_SECRET;
