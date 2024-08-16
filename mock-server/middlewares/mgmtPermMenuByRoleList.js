const { isMatch } = require("../utils");
const mgmtPermMenuByRoleList = require("../data/mgmtPermMenuByRoleList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/perm/menu/by_role/")(req.path)) {
    res.status(200).send(mgmtPermMenuByRoleList);
    return;
  }

  next();
};
