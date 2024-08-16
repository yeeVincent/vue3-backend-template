const { isMatch } = require("../utils");
const studentCourseActiveCourseCreate = require("../data/studentCourseActiveCourseCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/student/course/active_course/")(req.path)) {
    res.status(200).send(studentCourseActiveCourseCreate);
    return;
  }

  next();
};
