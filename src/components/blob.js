import React from 'react';
import './blob.css'
import styled, {css, keyframes} from 'styled-components'

const StyledBlobOne = styled.div`
opacity: .75;
position: absolute;
top: 0;
left: 0;
fill: #023F92;
width: 20vmax;
z-index: -2;
animation: animation-one 80s ease-in-out infinite;
@keyframes animation-one {
    0%   { transform: scale(1)   translate(1vw, -20px); }
    28%  { transform: skewX(25deg)  scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
    32%  { transform: skewX(25deg)  scale(0.8, 1) translate(60vw, 40vh) rotate(160deg); }
    68%  { transform: skewX(25deg)  scale(1.3) translate(30vw, 30vh) rotate(20deg); }
    80%  { transform: skewX(-50deg)  scale(1.3) translate(20vw, 20vh) rotate(40deg); }
    100% { transform: skewX(-25deg) scale(1)   translate(1vw, -20px); }
}
transformOrigin: 60% 50%
`;

const StyledBlobTwo = styled.div`
opacity: .33;
position: absolute;
top: 10;
left: 10;
fill: #023F92;
width: 25vmax;
z-index: -1;
animation: animation-two 80s ease-in-out infinite;
@keyframes animation-two {
    0%   { transform: scale(1)   translate(80vw, -20px); }
    28%  { transform: skewY(20deg) scale(0.8, 1) translate(60vw, 30vh) rotate(160deg); }
    40%  { transform: skewY(-40deg) scale(0.8, 1) translate(30vw, 60vh) rotate(160deg); }
    78%  { transform: skewY(40deg) scale(1.3) translate(5vw, 50vh) rotate(20deg); }
    80%  { transform: skewY(-20deg) scale(1.3) translate(5vw, 50vh) rotate(-20deg); }
    100% { transform: scale(1)   translate(80vw, -20px); }
}
transformOrigin: 60% 50%
`;

const StyledBlobThree = styled.div`
opacity: .55;
position: absolute;
top: 10;
left: 10;
fill: #023F92;
width: 30vmax;
z-index: -3;
animation: animation-three 80s ease-in-out infinite;
@keyframes animation-three {
    0%   { transform: scale(1)   translate(60vw, 60vw); }
    28%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(-160deg); }
    40%  { transform: scale(0.8, 1) translate(70vw, 60vh) rotate(160deg); }
    78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
    80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
    100% { transform: scale(1)   translate(60vw, 60vw); }
}
transformOrigin: 60% 50%
`;

export default function Blob({shape, style}){

    function blobShape(shape){
        switch (shape) {
            case 'one':
                return (
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFD6E8" d="M20.5,-25.8C34.5,-27.4,59.4,-38,67.7,-35.2C76,-32.4,67.7,-16.2,63.6,-2.4C59.5,11.5,59.5,22.9,55.5,33.2C51.6,43.5,43.6,52.6,33.7,60C23.8,67.5,11.9,73.2,3.5,67.1C-4.9,61.1,-9.8,43.2,-22.2,37.2C-34.6,31.2,-54.5,37.1,-61.7,32.9C-69,28.6,-63.5,14.3,-58.1,3.1C-52.7,-8.1,-47.3,-16.1,-42.1,-24C-37,-31.8,-32.1,-39.4,-25.1,-41.9C-18.1,-44.4,-9.1,-41.8,-2.9,-36.7C3.2,-31.7,6.5,-24.2,20.5,-25.8Z" transform="translate(100 100)" />
                    </svg>
                );
            case 'two':
                return (
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#A7F0BA" d="M43.4,-34.2C58.9,-27.8,76.1,-13.9,73.7,-2.5C71.2,9,49.1,18,33.6,24.6C18,31.1,9,35.2,0.7,34.5C-7.7,33.8,-15.3,28.4,-29,21.9C-42.6,15.3,-62.2,7.7,-64.9,-2.7C-67.5,-13,-53.2,-26,-39.6,-32.4C-26,-38.7,-13,-38.5,0.5,-39C13.9,-39.5,27.8,-40.6,43.4,-34.2Z" transform="translate(100 100)" />
                    </svg>
                )
            case 'three':
                return (
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#9EF0F0" d="M23.6,23.1C10.2,36.8,-35,41.5,-44.2,30.3C-53.4,19,-26.7,-8.3,-4.1,-10.6C18.5,-13,37,9.5,23.6,23.1Z" transform="translate(100 100)" />
                    </svg>
                );
            default: 
                return (
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#9EF0F0" d="M23.6,23.1C10.2,36.8,-35,41.5,-44.2,30.3C-53.4,19,-26.7,-8.3,-4.1,-10.6C18.5,-13,37,9.5,23.6,23.1Z" transform="translate(100 100)" />
                    </svg>
                )
        }
    }


    switch(style){
        case "one":
            return <StyledBlobOne className="one">{ blobShape(shape) }</StyledBlobOne>
        case "two":
            return <StyledBlobTwo className="two">{ blobShape(shape) }</StyledBlobTwo>
        case "three":
            return <StyledBlobThree className="three">{ blobShape(shape) }</StyledBlobThree>
    }
}