const { isMatch } = require("../utils");
const mgmtCourseSharedLinkRecordPartialUpdate = require("../data/mgmtCourseSharedLinkRecordPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/shared_link_record/:id/")(req.path)) {
    res.status(200).send(mgmtCourseSharedLinkRecordPartialUpdate);
    return;
  }

  next();
};
