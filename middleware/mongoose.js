import mongoose from "mongoose";

const connectDb = handler => async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect('mongodb+srv://nextjs:nextjs@cluster0.q4xjfx2.mongodb.net/next_js_demo?retryWrites=true&w=majority');
    return handler(req,res);
}

export default connectDb;