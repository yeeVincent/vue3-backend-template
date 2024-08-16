const { isMatch } = require('../utils');
const expInfoV1ConversationExpInfoGet = require('../data/expInfoV1ConversationExpInfoGet.json');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && isMatch('/v1/conversation/exp/info/')(req.path)) {
    res.status(200).send(expInfoV1ConversationExpInfoGet);
    return;
  }

  next();
};
