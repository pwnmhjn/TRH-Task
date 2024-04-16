import express from "express";
import { mongoose } from "mongoose";
import listings from "./routes/listings.js";
import reviews from "./routes/reviews.js";

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

// ============================================
app.use((error, req, res, next) => {
  const { status = 500, message = "something went wrong" } = error;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}/api/listings`);
});
