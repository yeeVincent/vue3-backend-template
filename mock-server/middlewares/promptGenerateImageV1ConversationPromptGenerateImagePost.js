const { isMatch } = require('../utils');
const promptGenerateImageV1ConversationPromptGenerateImagePost = require('../data/promptGenerateImageV1ConversationPromptGenerateImagePost.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'POST' &&
    isMatch('/v1/conversation/prompt_generate_image/')(req.path)
  ) {
    res
      .status(200)
      .send(promptGenerateImageV1ConversationPromptGenerateImagePost);
    return;
  }

  next();
};
