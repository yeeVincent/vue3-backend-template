const { isMatch } = require("../utils");
const mgmtUserPartialUpdate = require("../data/mgmtUserPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/user/:id/")(req.path)) {
    res.status(200).send(mgmtUserPartialUpdate);
    return;
  }

  next();
};
