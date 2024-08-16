const { isMatch } = require("../utils");
const courseDetailV1Retrieve = require("../data/courseDetailV1Retrieve.json");

module.exports = (req, res, next) => {
  if (req.method === "GET" && isMatch("/teacher/api/course/detail/v1/")(req.path)) {
    res.status(200).send(courseDetailV1Retrieve);
    return;
  }

  next();
};
