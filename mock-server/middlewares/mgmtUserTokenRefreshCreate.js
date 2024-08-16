const { isMatch } = require("../utils");
const mgmtUserTokenRefreshCreate = require("../data/mgmtUserTokenRefreshCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/mgmt/user/token/refresh/")(req.path)) {
    res.status(200).send(mgmtUserTokenRefreshCreate);
    return;
  }

  next();
};
