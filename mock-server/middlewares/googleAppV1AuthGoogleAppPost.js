const { isMatch } = require('../utils');
const googleAppV1AuthGoogleAppPost = require('../data/googleAppV1AuthGoogleAppPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/auth/google/app/')(req.path)) {
    res.status(200).send(googleAppV1AuthGoogleAppPost);
    return;
  }

  next();
};
