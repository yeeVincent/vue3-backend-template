const { isMatch } = require('../utils');
const appleAppV1AuthAppleAppPost = require('../data/appleAppV1AuthAppleAppPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/auth/apple/app/')(req.path)) {
    res.status(200).send(appleAppV1AuthAppleAppPost);
    return;
  }

  next();
};
