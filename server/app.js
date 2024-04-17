import express from "express";
import { mongoose } from "mongoose";
import listings from "./routes/listings.js";
import reviews from "./routes/reviews.js";
import User from "./models/users.js";
import Bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import cookieParser from "cookie-parser";

// =====================================================
const app = express();
const port = process.env.PORT || 3000;
const Mongo_URL = "mongodb://127.0.0.1:27017/wanderland";
// ===================================================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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
app.use("/api/listings", listings);
app.use("/api/listings", reviews);

app.post("/api/listings/register", async (req, res) => {
  const { name, email, password, username } = req.body;
  if (!(name && email && password && username)) {
    res.status(402).send("field are missing");
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    res.status(402).send("User is already exists");
  }
  const encryptedPass = await Bcrypt.hash(password, 9);
  const dbUser = await User.create({
    name,
    username,
    email,
    password: encryptedPass,
  });

  const token = JWT.sign({ id: dbUser._id, email }, "pwnmhjn", {
    expiresIn: "2h",
  });

  dbUser.password = undefined;
  res.status(200).send(dbUser);
});

app.post("/api/listings/login", async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    res.status(400).send("Field are missing");
  }
  const user = await User.findOne({ username });
  if (!user) {
    res.status(400).send("User does not Exist");
  }
  // await Bcrypt.compare(password,user.password)
  if (user && (await Bcrypt.compare(password, user.password))) {
    const token = JWT.sign({ id: user._id }, "pwnmhjn", {
      expiresIn: "2h",
    });
    user.password = undefined;

    //cookie
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      user,
    });
  } else {
    res.send("User does not Exist");
  }
});

// ============================================
app.use((error, req, res, next) => {
  const { status = 500, message = "something went wrong" } = error;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}/api/listings`);
});
