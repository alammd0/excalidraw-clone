"use client";

import { GetRooms } from "@/httprequest/roomrequest";
import { useEffect, useState } from "react"

interface Room {
    id : number,
    name : string,
    description : string,
    adminId : number,
    createdAt : string,
}

export default function AllRooms() {

    const [rooms, setRooms] = useState<Room[]>([]);

    const fetchRooms = async () => {
        const response = await GetRooms();
    }

    useEffect( () => {
        fetchRooms();
    }, [])

    console.log("Rooms - ", rooms);

    return (
        <div>
            <div>
                all Drawing Page..
            </div>
        </div>
    )
}