const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    originalPrice: {
      type: Number,
      default: 0,
    },
    images: [String],
    category: {
      type: String,
      required: true,
    },
    tags: [String],
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    arEnabled: {
      type: Boolean,
      default: false,
    },
    arAssets: {
      type: {
        type: String,
        enum: ["glasses", "hat", "none"],
        default: "none",
      },
      modelPath: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
