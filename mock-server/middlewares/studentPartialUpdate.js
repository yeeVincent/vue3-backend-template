const { isMatch } = require("../utils");
const studentPartialUpdate = require("../data/studentPartialUpdate.json");

module.exports = (req, res, next) => {
  if (req.method === "PATCH" && isMatch("/teacher/api/student/:id/")(req.path)) {
    res.status(200).send(studentPartialUpdate);
    return;
  }

  next();
};
