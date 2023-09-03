// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../.next/models/Product"
import connectDb from "../../.next/middleware/mongoose"
export default async function handler(req, res) {
  let products = await Product.find()
  res.status(200).json({ name: 'John Doe' })
}
