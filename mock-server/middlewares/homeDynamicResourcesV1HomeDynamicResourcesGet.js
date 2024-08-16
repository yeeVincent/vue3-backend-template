const { isMatch } = require('../utils');
const homeDynamicResourcesV1HomeDynamicResourcesGet = require('../data/homeDynamicResourcesV1HomeDynamicResourcesGet.json');

module.exports = (req, res, next) => {
  if (
    req.method === 'GET' &&
    isMatch('/v1/home/dynamic_resources/')(req.path)
  ) {
    res.status(200).send(homeDynamicResourcesV1HomeDynamicResourcesGet);
    return;
  }

  next();
};
