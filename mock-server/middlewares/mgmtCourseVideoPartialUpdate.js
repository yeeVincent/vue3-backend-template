const { isMatch } = require("../utils");
const mgmtCourseVideoPartialUpdate = require("../data/mgmtCourseVideoPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/video/:id/")(req.path)) {
    res.status(200).send(mgmtCourseVideoPartialUpdate);
    return;
  }

  next();
};
