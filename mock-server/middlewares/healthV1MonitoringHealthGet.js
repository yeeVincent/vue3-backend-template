const { isMatch } = require('../utils');
const healthV1MonitoringHealthGet = require('../data/healthV1MonitoringHealthGet.json');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && isMatch('/v1/monitoring/health/')(req.path)) {
    res.status(200).send(healthV1MonitoringHealthGet);
    return;
  }

  next();
};
