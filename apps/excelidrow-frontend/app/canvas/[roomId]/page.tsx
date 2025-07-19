import CanvasRoom from "@/components/canvas/CanvasRoom";

export default async function CanvasPage({ params } : { params : {
    roomId : string
}}) {

    const { roomId } = await params;


    return (
        <div>
           <CanvasRoom roomId={roomId} />
        </div>
    )
};