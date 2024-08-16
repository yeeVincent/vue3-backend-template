const { isMatch } = require("../utils");
const mgmtCourseCourseScheduleListFilterList = require("../data/mgmtCourseCourseScheduleListFilterList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/course/course_schedule/list_filter/")(req.path)) {
    res.status(200).send(mgmtCourseCourseScheduleListFilterList);
    return;
  }

  next();
};
