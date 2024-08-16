const { isMatch } = require('../utils');

module.exports = (req, res, next) => {
  if (req.method === 'DELETE' && isMatch('/v1/users/center/info/')(req.path)) {
    res.status(200).send();
    return;
  }

  next();
};
