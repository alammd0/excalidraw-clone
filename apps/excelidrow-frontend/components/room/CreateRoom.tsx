"use client";

import { CreateRoom } from "@/httprequest/roomrequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateRoomPage() {
  const [roomData, setRoomData] = useState({
    name: "",
    description: "",
  });


  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRoomData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await CreateRoom(roomData.name, roomData.description);

    if(!response.data){
        toast.error(response.message);
    }

    router.push("/rooms");
    toast.success(response.message);

    setRoomData({
        name : "",
        description : ""
    });
  }

  return (
    <div className="w-full">
      <div className="w-full flex gap-4 flex-col bg-gray-600 px-10 py-8 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold">Create Drawing Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="block mb-2 text-sm w-full font-medium text-white"
              htmlFor="name"
            >
              Name of the Drawing Page <sub className="text-red-500">*</sub>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={roomData.name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="block mb-2 text-sm w-full font-medium text-white"
              htmlFor="description"
            >
              About the Drawing
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={roomData.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="bg-indigo-600 w-fit hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Create Room</button>

          {/* <button className="bg-indigo-600 w-fit hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" type="submit">Create Room</button> */}
        </form>
      </div>
    </div>
  );
}
