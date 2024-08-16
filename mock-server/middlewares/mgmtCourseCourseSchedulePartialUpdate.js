const { isMatch } = require("../utils");
const mgmtCourseCourseSchedulePartialUpdate = require("../data/mgmtCourseCourseSchedulePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/course_schedule/:id/")(req.path)) {
    res.status(200).send(mgmtCourseCourseSchedulePartialUpdate);
    return;
  }

  next();
};
