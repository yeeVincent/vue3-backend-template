const { isMatch } = require("../utils");
const homeDynamicRetrieve = require("../data/homeDynamicRetrieve.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/home/dynamic/")(req.path)) {
    res.status(200).send(homeDynamicRetrieve);
    return;
  }

  next();
};
