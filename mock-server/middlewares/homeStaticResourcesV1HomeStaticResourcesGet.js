const { isMatch } = require('../utils');
const homeStaticResourcesV1HomeStaticResourcesGet = require('../data/homeStaticResourcesV1HomeStaticResourcesGet.json');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && isMatch('/v1/home/static_resources/')(req.path)) {
    res.status(200).send(homeStaticResourcesV1HomeStaticResourcesGet);
    return;
  }

  next();
};
