// Production Config Variables
const MLAB_ID = process.env.MLAB_ID;
const MLAB_PSWD = process.env.MLAB_PSWD;
const JWT_SECRET = process.env.JWT_SECRET;

// Production
module.exports = {
    database: "mongodb://" + MLAB_ID + ":" + MLAB_PSWD + "@ds153752.mlab.com:53752/eadsgraphic-auth-app",
    secret: JWT_SECRET
};

// Development
// module.exports = {
//     database: 'mongodb://localhost:27017/meanauth',
//     secret: "93F751EE67BF682261FC28E26817F"
// }
