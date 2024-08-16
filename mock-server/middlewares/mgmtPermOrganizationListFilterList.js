const { isMatch } = require("../utils");
const mgmtPermOrganizationListFilterList = require("../data/mgmtPermOrganizationListFilterList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/perm/organization/list_filter/")(req.path)) {
    res.status(200).send(mgmtPermOrganizationListFilterList);
    return;
  }

  next();
};
