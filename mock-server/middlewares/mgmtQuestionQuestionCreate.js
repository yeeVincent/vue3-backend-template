const { isMatch } = require("../utils");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/mgmt/question/question/")(req.path)) {
    res.status(200).send();
    return;
  }

  next();
};
