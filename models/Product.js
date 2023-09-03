

const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  catrgory: { type: String, required: true },
  size: { type: String },
  color: { type: String },
  price: { type: Number, required: true },
  avilableQty: { type: Number, required: true },
}, { timestamps: true });

mongoose.model = {}
export default mongoose.modelNames("Order", ProductSchema);