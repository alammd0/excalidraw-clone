import { Request, Response } from "express";
import { roomSchema } from "@repo/common/types";
import { prisma } from "@repo/db/db";

export const createRoom = async (req: Request, res: Response) => {
  try {
    const room = roomSchema.safeParse(req.body);

    if (!room.success) {
      return res.status(400).json({
          success: false,
          message: "Invalid request",
          error: room.error.message,
        });
    }

    const { name } = room.data;

    // check room exits or not 
    const roomExists = await prisma.room.findUnique({
        where : {
            slug : name
        }
    });

    console.log("Room Exits details - ", roomExists);

    if(roomExists){
        return res.status(400).json({
            success : false,
            message : "Room already exists"
        })
    }

    // @ts-ignore
    const userId = req.user.userId;
    console.log(userId);

    if(!userId){
        return res.status(400).json({
            success: false,
            message: "user Not Authorized",
        });
    }

    const roomData = await prisma.room.create({
        data : {
            slug : name,
            adminId : userId
        }
    });

    return res.status(200).json({
        success : true,
        message : "Room Created Successfully",
        data : roomData
    })

  } catch (error) {
    console.error(error);
    return res.status(200).json({
      success: false,
      message: "Something went wrong",
    })
  }
};

// get chat using roomId and limit least 10
export const getChat = async (req: Request, res: Response) => {
    try{

        const roomId = Number(req.params.roomId);

        // check room exits or not related to roomId
        const roomExists = await prisma.room.findUnique({
            where : {
                id : roomId
            }
        });

        if(!roomExists){
            return res.status(400).json({
                success : false,
                message : "Room not found"
            })
        }

        // if exits then find least 30 message 
        const chat = await prisma.chat.findMany({
            where : {
                roomId : roomId
            },
            orderBy : {
                createAt : "desc"
            },
            take : 30
        });

        console.log("Chat details - ", chat);
        
        return res.status(200).json({
            success : true,
            message : "Chat Fetched Successfully",
            data : chat
        })
    }
    catch(err){
        console.error(err);
        return res.status(200).json({
            success : false,
            message : "Something went wrong"
        })
    }
};
