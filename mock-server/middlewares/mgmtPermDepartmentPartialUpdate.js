const { isMatch } = require("../utils");
const mgmtPermDepartmentPartialUpdate = require("../data/mgmtPermDepartmentPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/perm/department/:id/")(req.path)) {
    res.status(200).send(mgmtPermDepartmentPartialUpdate);
    return;
  }

  next();
};
