import styled from "styled-components";


export const Squares = styled.section`


    .square{
        position:absolute;
        animation: 20s  animationSquare infinite linear;
        top: -30%;
    }

    .square1{left: 0px; animation-delay: 0s}
    .square2{left: 250px; animation-delay: 6s}
    .square3{left: 20%; animation-delay: 10s}
    .square4{left: 100px; animation-delay: 15s}


    .square5{left: 90%; animation-delay: 0s}
    .square6{left:  60%; animation-delay: 6s}
    .square7{left:  85%; animation-delay: 10s}
    .square8{left:  70%; animation-delay: 15s}




    @keyframes animationSquare{
        0%{
            top: 130%;
            transform: rotate(0deg);
            stroke-dasharray: 1 100;
            stroke-width: 0;
        }
        40%{

            stroke-dasharray: 100 0;
        }
        100%{
            top: -40%;
            stroke-dasharray: 1 100;

            transform: rotate(360deg);
        }
    }
`