const { isMatch } = require("../utils");
const mgmtCourseVideoCategoryPartialUpdate = require("../data/mgmtCourseVideoCategoryPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/video_category/:id/")(req.path)) {
    res.status(200).send(mgmtCourseVideoCategoryPartialUpdate);
    return;
  }

  next();
};
