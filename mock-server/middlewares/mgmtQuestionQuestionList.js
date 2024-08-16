const { isMatch } = require("../utils");
const mgmtQuestionQuestionList = require("../data/mgmtQuestionQuestionList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/question/question/")(req.path)) {
    res.status(200).send(mgmtQuestionQuestionList);
    return;
  }

  next();
};
