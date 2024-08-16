const { isMatch } = require('../utils');
const generateImageV1ConversationMessageGenerateImagePost = require('../data/generateImageV1ConversationMessageGenerateImagePost.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/conversation/message/generate_image/')(req.path)
  ) {
    res.status(200).send(generateImageV1ConversationMessageGenerateImagePost);
    return;
  }

  next();
};
