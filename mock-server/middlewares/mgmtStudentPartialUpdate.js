const { isMatch } = require("../utils");
const mgmtStudentPartialUpdate = require("../data/mgmtStudentPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/student/:id/")(req.path)) {
    res.status(200).send(mgmtStudentPartialUpdate);
    return;
  }

  next();
};
