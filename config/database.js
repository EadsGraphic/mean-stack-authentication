// Heroku Config Variables
let MLAB_ID = process.env.MLAB_ID;
let MLAB_PSWD = process.env.MLAB_PSWD;


module.exports = {
    database: "mongodb://" + MLAB_ID + ":" + MLAB_PSWD + "@ds153752.mlab.com:53752/eadsgraphic-auth-app",
    secret: "mysecretkey"
};
// database: 'mongodb://localhost:27017/meanauth', //Dev
