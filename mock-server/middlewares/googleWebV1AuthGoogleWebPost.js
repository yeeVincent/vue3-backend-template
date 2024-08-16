const { isMatch } = require('../utils');
const googleWebV1AuthGoogleWebPost = require('../data/googleWebV1AuthGoogleWebPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/auth/google/web/')(req.path)) {
    res.status(200).send(googleWebV1AuthGoogleWebPost);
    return;
  }

  next();
};
