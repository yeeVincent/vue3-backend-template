const { isMatch } = require('../utils');
const registerUserV1UsersRegisterPost = require('../data/registerUserV1UsersRegisterPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/users/register/')(req.path)) {
    res.status(200).send(registerUserV1UsersRegisterPost);
    return;
  }

  next();
};
