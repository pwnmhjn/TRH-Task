import express from "express";
import { mongoose } from "mongoose";
import listings from "./routes/listings.js";
import reviews from "./routes/reviews.js";
import users from "./routes/users.js";
import Listing from "./models/listings.js";
import Review from "./models/reviews.js";
import User from "./models/users.js";
import JWT from "jsonwebtoken"

import cookieParser from "cookie-parser";

// =====================================================
const app = express();
const port = process.env.PORT || 3000;
const Mongo_URL = "mongodb://127.0.0.1:27017/wanderland";
// ===================================================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// ==========================================
const main = async () => {
  mongoose.connect(Mongo_URL);
};
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
// ============================================


app.get("/api/listings/token", (req, res) => {
  const { token } = req.cookies;
  try {
      if (!token) {
    res.json({ status: false });
  } else {
    res.json({ status: true });
  }
  } catch (error) {
    res.send("Bad request")
  }

});
app.get("/api/listings/owner",  (req, res) => {
  try {
     const { token } = req.cookies;
  const decode = JWT.verify(token,"pwnmhjn")
  res.send(decode.id)
  } catch (error) {
    res.send("Access Denid")
  }
 

});

app.get("/api/listings/author", async(req, res) => {
  try {
     const { token } = req.cookies;
  const decode = JWT.verify(token,"pwnmhjn")
  res.send(decode.id)
  } catch (error) {
    res.send("Access Denid")
  }
});





app.use("/api/listings", listings);
app.use("/api/listings", reviews);
app.use("/api/listings", users);

// ============================================
app.use((error, req, res, next) => {
  const { status = 500, message = "something went wrong" } = error;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}/api/listings`);
});
