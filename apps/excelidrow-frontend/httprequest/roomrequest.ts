import { HTTP_URL } from "@/config";
import axios from "axios";

export async function CreateRoom(name: string, description: string) {
    const res = await axios.post(`${HTTP_URL}/api/v1/room/create-room`, {
       name : name,
        description : description
    }, {
        headers : {
            Authorization : "Bearer " + localStorage.getItem("token")
        }
    });

    return res.data;
}

export async function GetRooms() {
    const res = await axios.get(`${HTTP_URL}/api/v1/room/get-rooms`, {
        headers : {
            Authorization : "Bearer " + localStorage.getItem("token")
        }
    });

    return res.data;
}