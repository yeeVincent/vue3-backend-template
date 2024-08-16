const { isMatch } = require('../utils');
const captchaSendV1UtilsCaptchaSendPost = require('../data/captchaSendV1UtilsCaptchaSendPost.json');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && isMatch('/v1/utils/captcha/send/')(req.path)) {
    res.status(200).send(captchaSendV1UtilsCaptchaSendPost);
    return;
  }

  next();
};
