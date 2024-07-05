import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Product Name."],
    },
    photo: {
      type: String,
      required: [true, "Please add Product Photo."],
    },
    price: {
      type: Number,
      required: [true, "Please enter Product Price."],
    },
    stock: {
      type: Number,
      required: [true, "Please update stock."],
    },
    category: {
      type: String,
      required: [true, "Please enter Product Category."],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", schema);
