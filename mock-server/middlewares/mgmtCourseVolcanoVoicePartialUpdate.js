const { isMatch } = require("../utils");
const mgmtCourseVolcanoVoicePartialUpdate = require("../data/mgmtCourseVolcanoVoicePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/volcano_voice/:id/")(req.path)) {
    res.status(200).send(mgmtCourseVolcanoVoicePartialUpdate);
    return;
  }

  next();
};
