const { isMatch } = require("../utils");
const mgmtPermOrganizationPartialUpdate = require("../data/mgmtPermOrganizationPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/perm/organization/:id/")(req.path)) {
    res.status(200).send(mgmtPermOrganizationPartialUpdate);
    return;
  }

  next();
};
