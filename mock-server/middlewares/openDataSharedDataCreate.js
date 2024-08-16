const { isMatch } = require("../utils");
const openDataSharedDataCreate = require("../data/openDataSharedDataCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/open_data/shared_data/")(req.path)) {
    res.status(200).send(openDataSharedDataCreate);
    return;
  }

  next();
};
