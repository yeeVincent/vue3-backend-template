const { isMatch } = require("../utils");
const mgmtCourseUserLessonPartialUpdate = require("../data/mgmtCourseUserLessonPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/user_lesson/:id/")(req.path)) {
    res.status(200).send(mgmtCourseUserLessonPartialUpdate);
    return;
  }

  next();
};
