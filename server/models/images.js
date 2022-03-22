const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema(
  {
    img_url: {
      type: String,
      required: [true, "Please provide image url"],
    },
    img_desc: {
      type: String,
      required: [true, "Pleas provide image description"],
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: [true, "Please provide user id"],
    },
  },
  { timestamps: true }
);

imagesSchema.index({ img_desc: "text" });

module.exports = mongoose.model("Images", imagesSchema);
