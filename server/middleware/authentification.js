const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authentificateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthenticatedError("Authentification invalid");
    }

    try {
      const token = authHeader.split(" ")[1];
      const payload = jwt.verify(token, process.env.JWT_SECRET);

      req.user = { userId: payload.userId, username: payload.username };
      next();
    } catch (error) {
      throw new UnauthenticatedError("Authentification invalid");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authentificateUser;
