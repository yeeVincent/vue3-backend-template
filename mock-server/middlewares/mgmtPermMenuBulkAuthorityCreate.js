const { isMatch } = require("../utils");
const mgmtPermMenuBulkAuthorityCreate = require("../data/mgmtPermMenuBulkAuthorityCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/mgmt/perm/menu/bulk_authority/")(req.path)) {
    res.status(200).send(mgmtPermMenuBulkAuthorityCreate);
    return;
  }

  next();
};
