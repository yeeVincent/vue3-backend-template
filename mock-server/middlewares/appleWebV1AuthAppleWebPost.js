const { isMatch } = require('../utils');
const appleWebV1AuthAppleWebPost = require('../data/appleWebV1AuthAppleWebPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/auth/apple/web/')(req.path)) {
    res.status(200).send(appleWebV1AuthAppleWebPost);
    return;
  }

  next();
};
