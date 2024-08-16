const { isMatch } = require("../utils");
const mgmtCourseLessonPartialUpdate = require("../data/mgmtCourseLessonPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/lesson/:id/")(req.path)) {
    res.status(200).send(mgmtCourseLessonPartialUpdate);
    return;
  }

  next();
};
