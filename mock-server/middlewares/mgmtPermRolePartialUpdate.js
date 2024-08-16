const { isMatch } = require("../utils");
const mgmtPermRolePartialUpdate = require("../data/mgmtPermRolePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/perm/role/:id/")(req.path)) {
    res.status(200).send(mgmtPermRolePartialUpdate);
    return;
  }

  next();
};
