const express = require("express");
const { getImages, uploadImage, deleteImage } = require("../controllers/images");

const router = express.Router();

router.get("/", getImages);
router.post("/", uploadImage);
router.delete("/:id", deleteImage);

module.exports = router;
