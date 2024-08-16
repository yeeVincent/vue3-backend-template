const { isMatch } = require("../utils");
const mgmtPermRoleListFilterList = require("../data/mgmtPermRoleListFilterList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/perm/role/list_filter/")(req.path)) {
    res.status(200).send(mgmtPermRoleListFilterList);
    return;
  }

  next();
};
