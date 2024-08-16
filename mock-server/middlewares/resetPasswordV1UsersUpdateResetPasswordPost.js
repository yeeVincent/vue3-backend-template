const { isMatch } = require('../utils');
const resetPasswordV1UsersUpdateResetPasswordPost = require('../data/resetPasswordV1UsersUpdateResetPasswordPost.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/users/update/reset_password/')(req.path)
  ) {
    res.status(200).send(resetPasswordV1UsersUpdateResetPasswordPost);
    return;
  }

  next();
};
