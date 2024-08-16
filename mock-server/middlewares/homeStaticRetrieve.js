const { isMatch } = require("../utils");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/home/static/")(req.path)) {
    res.status(200).send();
    return;
  }

  next();
};
