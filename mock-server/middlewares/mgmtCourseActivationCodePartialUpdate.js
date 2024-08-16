const { isMatch } = require("../utils");
const mgmtCourseActivationCodePartialUpdate = require("../data/mgmtCourseActivationCodePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/activation_code/:id/")(req.path)) {
    res.status(200).send(mgmtCourseActivationCodePartialUpdate);
    return;
  }

  next();
};
