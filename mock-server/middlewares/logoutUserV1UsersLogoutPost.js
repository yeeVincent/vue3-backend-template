const { isMatch } = require('../utils');
const logoutUserV1UsersLogoutPost = require('../data/logoutUserV1UsersLogoutPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/users/logout/')(req.path)) {
    res.status(200).send(logoutUserV1UsersLogoutPost);
    return;
  }

  next();
};
