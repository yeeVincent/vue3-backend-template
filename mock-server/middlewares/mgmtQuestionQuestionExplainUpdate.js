const { isMatch } = require("../utils");

module.exports = (req, res, next) => {
  if (req.method === "PUT" && isMatch("/teacher/api/mgmt/question/question_explain/")(req.path)) {
    res.status(200).send();
    return;
  }

  next();
};
