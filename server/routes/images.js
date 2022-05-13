const express = require("express");
const {
  getImages,
  uploadImage,
  deleteImage,
  getUserImages,
} = require("../controllers/images");

const router = express.Router();

router.get("/", getImages);
router.get("/:userId", getUserImages);
router.post("/", uploadImage);
router.delete("/:id", deleteImage);

module.exports = router;
