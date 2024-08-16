const { isMatch } = require("../utils");
const mgmtStudentCourseInfoRetrieve = require("../data/mgmtStudentCourseInfoRetrieve.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/student/:id/course_info/")(req.path)) {
    res.status(200).send(mgmtStudentCourseInfoRetrieve);
    return;
  }

  next();
};
