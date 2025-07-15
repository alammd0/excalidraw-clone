
import { Request, NextFunction } from "express"

export const middleware = async (req:Request, next : NextFunction) => {
    try{
        const token = req.headers["authorization"] ?? "";

        if(!token){
            return 
        }
    }
    catch(error){

    }
}