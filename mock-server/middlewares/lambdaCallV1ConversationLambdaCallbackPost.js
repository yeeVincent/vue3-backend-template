const { isMatch } = require('../utils');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/conversation/lambda_callback/')(req.path)
  ) {
    res.status(200).send();
    return;
  }

  next();
};
