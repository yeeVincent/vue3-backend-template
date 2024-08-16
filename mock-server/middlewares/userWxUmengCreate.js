const { isMatch } = require("../utils");
const userWxUmengCreate = require("../data/userWxUmengCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/user/wx/umeng/")(req.path)) {
    res.status(200).send(userWxUmengCreate);
    return;
  }

  next();
};
