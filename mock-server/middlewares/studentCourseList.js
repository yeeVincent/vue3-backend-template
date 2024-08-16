const { isMatch } = require("../utils");
const studentCourseList = require("../data/studentCourseList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/student/course/")(req.path)) {
    res.status(200).send(studentCourseList);
    return;
  }

  next();
};
