const { isMatch } = require('../utils');
const generateMessageV1ConversationMessageGeneratePost = require('../data/generateMessageV1ConversationMessageGeneratePost.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/conversation/message/generate/')(req.path)
  ) {
    res.status(200).send(generateMessageV1ConversationMessageGeneratePost);
    return;
  }

  next();
};
