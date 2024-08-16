const { isMatch } = require('../utils');
const messageListV1ConversationMessageListGet = require('../data/messageListV1ConversationMessageListGet.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'GET' &&
    isMatch('/v1/conversation/message_list/')(req.path)
  ) {
    res.status(200).send(messageListV1ConversationMessageListGet);
    return;
  }

  next();
};
