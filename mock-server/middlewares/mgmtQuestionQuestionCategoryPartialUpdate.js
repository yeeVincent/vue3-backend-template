const { isMatch } = require("../utils");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/question/question_category/:id/")(req.path)) {
    res.status(200).send();
    return;
  }

  next();
};
