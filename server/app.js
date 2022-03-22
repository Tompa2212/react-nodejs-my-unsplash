require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");

//middleware
const authMiddleware = require("./middleware/authentification");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

//app
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 7000;

const imagesRoute = require("./routes/images");
const authRoute = require("./routes/auth");

app.get("/", (req, res) => res.send("<h1>My Unsplash API</h1>"));

app.use("/api/v1/unsplash/images", authMiddleware, imagesRoute);
app.use("/api/v1/unsplash/auth", authRoute);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
