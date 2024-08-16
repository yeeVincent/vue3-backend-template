const { isMatch } = require('../utils');
const getConversationDetailV1ConversationDetailGet = require('../data/getConversationDetailV1ConversationDetailGet.json');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && isMatch('/v1/conversation/detail/')(req.path)) {
    res.status(200).send(getConversationDetailV1ConversationDetailGet);
    return;
  }

  next();
};
