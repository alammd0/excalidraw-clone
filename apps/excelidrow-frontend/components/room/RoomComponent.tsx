import AllRooms from "./AllRooms";
import CreateRoom from "./CreateRoom";


export default function RoomComponent() {
    return (
        <div className="w-full flex flex-col gap-10">    
            {/* here add create room component */}
           <div>
            <CreateRoom />
           </div>

           {/* Here Add Room Component */}
           <div>
            <AllRooms />
           </div>
        </div>
    )
}