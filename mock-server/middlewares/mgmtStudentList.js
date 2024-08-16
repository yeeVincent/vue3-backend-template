const { isMatch } = require("../utils");
const mgmtStudentList = require("../data/mgmtStudentList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/student/")(req.path)) {
    res.status(200).send(mgmtStudentList);
    return;
  }

  next();
};
