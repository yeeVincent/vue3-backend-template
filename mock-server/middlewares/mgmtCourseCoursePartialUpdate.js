const { isMatch } = require("../utils");
const mgmtCourseCoursePartialUpdate = require("../data/mgmtCourseCoursePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/course/:id/")(req.path)) {
    res.status(200).send(mgmtCourseCoursePartialUpdate);
    return;
  }

  next();
};
