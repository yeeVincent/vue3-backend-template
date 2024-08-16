const { isMatch } = require("../utils");
const mgmtPermMenuList = require("../data/mgmtPermMenuList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/perm/menu/")(req.path)) {
    res.status(200).send(mgmtPermMenuList);
    return;
  }

  next();
};
