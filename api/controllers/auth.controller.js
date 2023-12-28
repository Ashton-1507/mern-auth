import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req,res,next) =>
{
    const {username,email,password} = req.body;
    const hashpassword = bcryptjs.hashSync(password,10);
    const newuser = new User({username:username,email:email,password:hashpassword});
    try
    {
        await newuser.save()
        res.status(201).json({message:"user created successfully"});
    }
    catch(error)
    {
        next(error);
    }
};