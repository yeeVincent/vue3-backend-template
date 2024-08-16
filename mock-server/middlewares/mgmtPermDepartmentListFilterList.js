const { isMatch } = require("../utils");
const mgmtPermDepartmentListFilterList = require("../data/mgmtPermDepartmentListFilterList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/perm/department/list_filter/")(req.path)) {
    res.status(200).send(mgmtPermDepartmentListFilterList);
    return;
  }

  next();
};
