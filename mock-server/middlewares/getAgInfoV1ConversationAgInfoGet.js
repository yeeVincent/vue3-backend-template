const { isMatch } = require('../utils');
const getAgInfoV1ConversationAgInfoGet = require('../data/getAgInfoV1ConversationAgInfoGet.json');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && isMatch('/v1/conversation/ag_info/')(req.path)) {
    res.status(200).send(getAgInfoV1ConversationAgInfoGet);
    return;
  }

  next();
};
