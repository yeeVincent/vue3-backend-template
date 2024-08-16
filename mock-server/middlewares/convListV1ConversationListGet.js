const { isMatch } = require('../utils');
const convListV1ConversationListGet = require('../data/convListV1ConversationListGet.json');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && isMatch('/v1/conversation/list/')(req.path)) {
    res.status(200).send(convListV1ConversationListGet);
    return;
  }

  next();
};
