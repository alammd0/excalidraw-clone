import { Request, Response } from "express";
import { CreateUserSchema, LoginUserSchema } from "@repo/common/types";
import { prisma } from "@repo/db/db";
import bcrypt, { hash } from "bcryptjs";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  try {
    const user = CreateUserSchema.safeParse(req.body);

    if (!user.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request",
        error: user.error.message,
      });
    }

    const { username, email, name, password } = user.data;
    
    // check user exits or not
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists, Please login",
      });
    }

    // hashed the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        name: name,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });

  } catch (error: any) {
    console.error(error);
    return res.status(504).json({
      success: false,
      message: "Something went wrong",
      error: error.message || "Something went wrong",
    });

  }
};

export const login = async (req: Request, res : Response) => {
  try {


    const user = LoginUserSchema.safeParse(req.body);

    if(!user.success){
        return res.status(400).json({
            success : false,
            message : "Invalid request",
            error : user.error.message
        })
    }

    const {email , password} = user.data ;

    // check exits or not 
    const userExists = await prisma.user.findUnique({
        where : {
            email : email
        }
    })

    if(!userExists){
        return res.status(400).json({
            success : false,
            message : "User not found, Please Create Account"
        })
    }

    // check password are match or not
    const isMatchPassword = await bcrypt.compare(password, userExists.password); 

    if(!isMatchPassword){
        return res.status(400).json({
            success : false,
            message : "Invalid Password"
        })
    };

    // create token  
    const payload = {
        userId : userExists.id,
        email : userExists.email,
        username : userExists.username
    }

    const token = jwt.sign(payload , JWT_SECRET);

    res.status(200).json({
        success : true,
        message : "Login Successfully",
        data : {
            user : userExists,
            token : token
        }
    })


  } catch (error : any) {
    console.error(error);
    return res.status(504).json({
        success : false,
        message : "Something went wrong",
        error : error.message
    })
  }
};
