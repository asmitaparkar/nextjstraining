import Products from '../../models/Products';
import connectDb from "../../middleware/mongoose";

const handler = async(req,res) =>{
    const {id} = req.query;
    const data = await Products.findOne({id:id});
}

export default connectDb(handler);
