const { isMatch } = require("../utils");
const mgmtCourseUserLessonExercisePartialUpdate = require("../data/mgmtCourseUserLessonExercisePartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/mgmt/course/user_lesson_exercise/:id/")(req.path)) {
    res.status(200).send(mgmtCourseUserLessonExercisePartialUpdate);
    return;
  }

  next();
};
