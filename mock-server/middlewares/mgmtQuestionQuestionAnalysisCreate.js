const { isMatch } = require("../utils");
const mgmtQuestionQuestionAnalysisCreate = require("../data/mgmtQuestionQuestionAnalysisCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/mgmt/question/question_analysis/")(req.path)) {
    res.status(200).send(mgmtQuestionQuestionAnalysisCreate);
    return;
  }

  next();
};
