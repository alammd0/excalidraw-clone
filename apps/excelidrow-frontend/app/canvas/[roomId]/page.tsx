"use client";

import { useEffect, useRef } from "react";


export default function Canvas() {


    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect( () => {

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        // ctx?.strokeRect(   0,0,800,600);
        let clicked = false;
        let startX = 0;
        let startY = 0;

        canvas?.addEventListener('mousedown', (e) => {
            clicked = true;

            startX = e.clientX;
            startY = e.clientY;
        })

        



        canvas?.addEventListener('mouseup', () => {
            clicked = false;
        })

        canvas?.addEventListener('mousemove', (e) => {
            if(clicked){
                const width = e.clientX - startX;
                const height = e.clientY - startY;

                ctx?.clearRect(0, 0, canvas.width, canvas.height);
                ctx?.strokeRect(startX, startY, width, height);
            }
        })

    }, [])

    return (
        <div className="bg-white h-screen">
            <canvas ref={canvasRef} id="canvas" width="800" height="600"></canvas>
        </div>
    );
};