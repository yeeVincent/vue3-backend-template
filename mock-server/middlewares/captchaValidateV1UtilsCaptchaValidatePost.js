const { isMatch } = require('../utils');
const captchaValidateV1UtilsCaptchaValidatePost = require('../data/captchaValidateV1UtilsCaptchaValidatePost.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/utils/captcha/validate/')(req.path)
  ) {
    res.status(200).send(captchaValidateV1UtilsCaptchaValidatePost);
    return;
  }

  next();
};
