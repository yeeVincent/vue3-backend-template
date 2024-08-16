const { isMatch } = require("../utils");
const mgmtStudentRetrieve = require("../data/mgmtStudentRetrieve.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/student/:id/")(req.path)) {
    res.status(200).send(mgmtStudentRetrieve);
    return;
  }

  next();
};
