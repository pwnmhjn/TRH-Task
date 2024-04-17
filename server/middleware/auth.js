import JWT from "jsonwebtoken";


const auth = (req, res, next) => {
    console.log(req.cookies)
    const { token } = rq.cookies
    if (!token) {
        res.status(403).send("please login first")
    }
    const decode = JWT.verify(token,"pwnmhjn")
    console.log(decode)
   return next()
}

export default auth;
