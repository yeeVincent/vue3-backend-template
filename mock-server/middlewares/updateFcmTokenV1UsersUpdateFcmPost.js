const { isMatch } = require('../utils');
const updateFcmTokenV1UsersUpdateFcmPost = require('../data/updateFcmTokenV1UsersUpdateFcmPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/users/update/fcm/')(req.path)) {
    res.status(200).send(updateFcmTokenV1UsersUpdateFcmPost);
    return;
  }

  next();
};
