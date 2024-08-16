const { isMatch } = require("../utils");
const mgmtCourseVideoListFilterList = require("../data/mgmtCourseVideoListFilterList.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/mgmt/course/video/list_filter/")(req.path)) {
    res.status(200).send(mgmtCourseVideoListFilterList);
    return;
  }

  next();
};
