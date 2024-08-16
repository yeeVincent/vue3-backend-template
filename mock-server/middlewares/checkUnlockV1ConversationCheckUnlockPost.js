const { isMatch } = require('../utils');
const checkUnlockV1ConversationCheckUnlockPost = require('../data/checkUnlockV1ConversationCheckUnlockPost.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/conversation/check/unlock/')(req.path)
  ) {
    res.status(200).send(checkUnlockV1ConversationCheckUnlockPost);
    return;
  }

  next();
};
