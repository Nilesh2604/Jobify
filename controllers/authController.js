import user from "../models/user.js"
import { StatusCodes } from "http-status-codes";
import {BadRequestError,UnauthenticatedError} from "../errors/index.js"


const register= async (req,res)=>{
     const {name,email,password}=req.body;

     if(!name|| !email || !password){
        throw new BadRequestError('Please provide all values')
     }
     const emailAlreadyExists=await user.findOne({email});
      if(emailAlreadyExists){
        throw new BadRequestError('Email is already in use')
      }

        const User=await user.create(req.body);
        const token=User.createJWT()
         res.status(StatusCodes.CREATED).json({
          user:
          {email:User.email,
          lastname:User.lastName,
          location:User.location,
          name:User.name,
        },
          token,location:User.location
        })

}
const login= async (req,res)=>{
   const {email,password}=req.body;

     if(!email || !password){
        throw new BadRequestError('Please provide all values')
     }

 const User=await user.findOne({email}).select('+password')
 if(!User){
  throw new UnauthenticatedError('Invalid Creditionals')
 }

 const isPasswordCorrect=await User.comparePassword(password);
  if(!isPasswordCorrect){
  throw new UnauthenticatedError('Invalid Creditionals')
 }
 const token=User.createJWT();

User.password=undefined;

    res.status(StatusCodes.OK).json({user:User,token,location:User.location})

}




const updateUser= async (req,res)=>{
  const {name,email,lastName,location}=req.body;

  if(!email || !name || !lastName || !location){
    throw new BadRequestError('Please provide all the values')
  }

  const User=await user.findOne({_id:req.user.userId});
 
  User.email=email;
  User.name=name;
  User.lastName=lastName;
  User.location=location;

  await User.save()
  const token=User.createJWT()

    res.status(StatusCodes.OK).json({user:User,token,location:User.location}) 

}

export  {register,login,updateUser};