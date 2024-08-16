const { isMatch } = require("../utils");
const mgmtStudentBulkAddCourseCreate = require("../data/mgmtStudentBulkAddCourseCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/mgmt/student/bulk_add_course/")(req.path)) {
    res.status(200).send(mgmtStudentBulkAddCourseCreate);
    return;
  }

  next();
};
