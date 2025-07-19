import { getExistingShape } from "./http"


type Shape = {
    type : "rect",
    x : number,
    y : number,
    width : number,
    height : number
} | {
    type : "circle",
    x : number,
    y : number,
    radius : number
} | {
    type : "line",
    x1 : number,
    y1 : number,
    x2 : number,
    y2 : number
} | {
    type : "pencil",
    x : number,
    y : number,
    endX : number,
    endY : number
}

// init the canvas the first time
export async function initDraw(canvas : HTMLCanvasElement, roomId : string, socket : WebSocket) {
    const ctx = canvas.getContext("2d"); 

    if(!ctx){
        return;
    }

    let existingShape : Shape[] = await getExistingShape(Number(roomId));
    // console.log( "existingShape - ",existingShape);

    console.log("socket", socket);
    console.log("rec here")
    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message);

        if(message.type === "chat"){
            const parsedShape = JSON.parse(message.message);
            console.log(parsedShape);
            existingShape.push(parsedShape);
            console.log(existingShape);
            clearCanvas(existingShape, ctx, canvas);
        }
    }

    clearCanvas(existingShape, ctx, canvas);
    let clicked = false;
    let startX = 0;
    let startY = 0;

    // write main logic here 
    canvas.addEventListener("mousedown", (e) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
    })

    canvas.addEventListener("mouseup", (e) => {
        clicked = false;
        const width = e.clientX - startX;
        const height = e.clientY - startY;

        // @ts-ignore
        const selectedTool = window.selectedTool;
        let shape : Shape | null = null;

        if(selectedTool === "rect"){
            shape = {
                type : "rect",
                x : startX,
                y : startY,
                width : width,
                height : height
            }
        }

        else if(selectedTool === "circle"){
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            const radius = Math.sqrt(dx * dx + dy * dy);

            shape = {
                type: "circle",
                x: startX,
                y: startY,
                radius
            };
        }

        if(!shape){
            return;
        }

        existingShape.push(shape);
        
        socket.send(JSON.stringify({
            type : "chat",
            message : JSON.stringify({shape}),
            roomId
        }));

    })  

    canvas.addEventListener("mousemove", (e) => {
        if(clicked){
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            clearCanvas(existingShape, ctx, canvas);
            ctx.strokeStyle = "rgba(255, 255, 255)"
            //  @ts-ignore
             const selectedTool = window.selectedTool;
             if(selectedTool === "rect"){
                ctx.strokeRect(startX, startY, width, height);
             }
             else if(selectedTool === "circle"){
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                const radius = Math.sqrt(dx * dx + dy * dy);
                console.log(radius) // ✅ proper radius
                ctx.beginPath();
                ctx.arc(startX, startY, radius, 0, 2 * Math.PI); // ✅ center at startX/Y
                ctx.stroke();
                ctx.closePath();
             }
        }
    })
}


// clear the space 
export function clearCanvas(existingShape: Shape[], ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    existingShape.map((shape) => {
        if (shape.type === "rect") {
            ctx.strokeStyle = "rgba(255, 255, 255)"
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        } else if (shape.type === "circle") {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();                
        }
    })
}
