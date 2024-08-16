const { isMatch } = require("../utils");
const userBindPhoneCreate = require("../data/userBindPhoneCreate.json");

module.exports = (req, res, next) => {
  if (req.method === "POST" && isMatch("/teacher/api/user/bind/phone/")(req.path)) {
    res.status(200).send(userBindPhoneCreate);
    return;
  }

  next();
};
