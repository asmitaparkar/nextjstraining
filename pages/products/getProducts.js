import Products from "../../../models/Products";
import connectDb from "../../../middleware/mongoose";

// Get call to fetch some data
const handler = async (req, res) => {
  const data = await Products.find();
  res.status(200).json(data);
};

export default connectDb(handler);
