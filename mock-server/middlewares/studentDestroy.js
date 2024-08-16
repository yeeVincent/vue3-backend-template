const { isMatch } = require("../utils");

module.exports = (req, res, next) => {
  if (req.method === "DELETE" && isMatch("/teacher/api/student/:id/")(req.path)) {
    res.status(200).send();
    return;
  }

  next();
};
