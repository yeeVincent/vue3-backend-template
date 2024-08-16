const { isMatch } = require("../utils");
const mgmtCourseLessonExercisePartialUpdate = require("../data/mgmtCourseLessonExercisePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/lesson_exercise/:id/")(req.path)) {
    res.status(200).send(mgmtCourseLessonExercisePartialUpdate);
    return;
  }

  next();
};
