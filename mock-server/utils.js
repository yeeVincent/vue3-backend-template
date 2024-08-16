const { pathToRegexp } = require('path-to-regexp');

const isMatch = (routePattern) => (routePath) => {
  const regexp = pathToRegexp(routePattern);
  return !!regexp.exec(routePath);
};

module.exports = { isMatch };
