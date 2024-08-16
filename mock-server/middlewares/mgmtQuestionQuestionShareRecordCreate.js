const { isMatch } = require("../utils");
const mgmtQuestionQuestionShareRecordCreate = require("../data/mgmtQuestionQuestionShareRecordCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/mgmt/question/question_share_record/")(req.path)) {
    res.status(200).send(mgmtQuestionQuestionShareRecordCreate);
    return;
  }

  next();
};
