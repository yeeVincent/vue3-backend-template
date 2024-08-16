const { isMatch } = require("../utils");
const courseLessonDetailV1Retrieve = require("../data/courseLessonDetailV1Retrieve.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/course/lesson/detail/v1/")(req.path)) {
    res.status(200).send(courseLessonDetailV1Retrieve);
    return;
  }

  next();
};
