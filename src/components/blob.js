import React from 'react';

export default function Blob(){
    return (
        <div className="blob"
              style= {
                {position: "absolute",
                top: "0",
                left: "0",
                fill: "#023F92",
                width: "50vmax",
                zIndex: "-1",
                animation: "move 10s ease-in-out infinite",
                transformOrigin: "50% 50%"}
              }>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFD6E8" d="M20.5,-25.8C34.5,-27.4,59.4,-38,67.7,-35.2C76,-32.4,67.7,-16.2,63.6,-2.4C59.5,11.5,59.5,22.9,55.5,33.2C51.6,43.5,43.6,52.6,33.7,60C23.8,67.5,11.9,73.2,3.5,67.1C-4.9,61.1,-9.8,43.2,-22.2,37.2C-34.6,31.2,-54.5,37.1,-61.7,32.9C-69,28.6,-63.5,14.3,-58.1,3.1C-52.7,-8.1,-47.3,-16.1,-42.1,-24C-37,-31.8,-32.1,-39.4,-25.1,-41.9C-18.1,-44.4,-9.1,-41.8,-2.9,-36.7C3.2,-31.7,6.5,-24.2,20.5,-25.8Z" transform="translate(100 100)" />
            </svg>
        </div>
        
    )
}