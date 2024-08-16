const { isMatch } = require('../utils');
const agListV1HomeAgListGet = require('../data/agListV1HomeAgListGet.json');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && isMatch('/v1/home/ag/list/')(req.path)) {
    res.status(200).send(agListV1HomeAgListGet);
    return;
  }

  next();
};
