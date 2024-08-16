const { isMatch } = require("../utils");
const mgmtQuestionQuestionCategoryList = require("../data/mgmtQuestionQuestionCategoryList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/question/question_category/")(req.path)) {
    res.status(200).send(mgmtQuestionQuestionCategoryList);
    return;
  }

  next();
};
