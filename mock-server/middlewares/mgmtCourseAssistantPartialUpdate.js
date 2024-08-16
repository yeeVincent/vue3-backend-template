const { isMatch } = require("../utils");
const mgmtCourseAssistantPartialUpdate = require("../data/mgmtCourseAssistantPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/assistant/:id/")(req.path)) {
    res.status(200).send(mgmtCourseAssistantPartialUpdate);
    return;
  }

  next();
};
