import express from "express";
import mongoose from "mongoose";
import users from "./users/index.js"
import blogs from "./blogs/index.js"
import cors from "cors"

const app = express();

app.use(express.json());

app.use(cors())

mongoose
  .connect("")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("errr===>", err));

app.use("/api/users", users);
app.use("/api/blogs", blogs);

app.use("/", (req, res) => {
  res.send(new Date());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
