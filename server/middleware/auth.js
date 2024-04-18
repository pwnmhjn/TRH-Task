import JWT from "jsonwebtoken";

const auth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(403).send("please login first");
  }
  const decode = JWT.verify(token, "pwnmhjn");
  return next();
};

export default auth;
