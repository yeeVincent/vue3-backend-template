const { isMatch } = require("../utils");
const mgmtQuestionQuestionRetrieve = require("../data/mgmtQuestionQuestionRetrieve.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/question/question/:id/")(req.path)) {
    res.status(200).send(mgmtQuestionQuestionRetrieve);
    return;
  }

  next();
};
