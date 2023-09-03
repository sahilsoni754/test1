// Next.js API route support:
import product from "../../models/Product"
import connectDb from "../../middleware/mongoose"
const handler = async (req, res) => {
    if (req.method == 'post') {
       console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                catrgory: req.body[i].catrgory,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                avilableQty: req.body[i].avilableQty,
            })
            await p.save()
        }
        res.status(400).json({ Error: "This method is not allowed" })
        
    }
    else {
        res.status(200).json({ success: "success" })
    }

    
}
export default connectDb(handler);
