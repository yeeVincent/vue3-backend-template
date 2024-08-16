const { isMatch } = require('../utils');
const loginUserV1UsersLoginPost = require('../data/loginUserV1UsersLoginPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/users/login/')(req.path)) {
    res.status(200).send(loginUserV1UsersLoginPost);
    return;
  }

  next();
};
