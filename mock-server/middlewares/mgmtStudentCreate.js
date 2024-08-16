const { isMatch } = require("../utils");
const mgmtStudentCreate = require("../data/mgmtStudentCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/mgmt/student/")(req.path)) {
    res.status(200).send(mgmtStudentCreate);
    return;
  }

  next();
};
