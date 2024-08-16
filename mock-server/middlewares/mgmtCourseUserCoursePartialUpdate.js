const { isMatch } = require("../utils");
const mgmtCourseUserCoursePartialUpdate = require("../data/mgmtCourseUserCoursePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/user_course/:id/")(req.path)) {
    res.status(200).send(mgmtCourseUserCoursePartialUpdate);
    return;
  }

  next();
};
