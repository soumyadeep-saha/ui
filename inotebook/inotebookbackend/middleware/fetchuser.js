const jwt = require("jsonwebtoken");
const JWT_SECRET = "iamagood$boy";

const fetchuser = (req, res, next) => {
  // Get the user from jwt token and add id to req object
  const token = req.header("x-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    const userdata = jwt.verify(token, JWT_SECRET);
    req.user = userdata.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
