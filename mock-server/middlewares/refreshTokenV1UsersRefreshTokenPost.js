const { isMatch } = require('../utils');
const refreshTokenV1UsersRefreshTokenPost = require('../data/refreshTokenV1UsersRefreshTokenPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/users/refresh_token/')(req.path)) {
    res.status(200).send(refreshTokenV1UsersRefreshTokenPost);
    return;
  }

  next();
};
