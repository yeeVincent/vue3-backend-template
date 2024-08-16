const { isMatch } = require('../utils');
const unlockImageV1ConversationUnlockImagePost = require('../data/unlockImageV1ConversationUnlockImagePost.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/conversation/unlock_image/')(req.path)
  ) {
    res.status(200).send(unlockImageV1ConversationUnlockImagePost);
    return;
  }

  next();
};
