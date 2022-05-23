import styled from "styled-components";


export const Form = styled.section`
       font-family: Poppins;
       display: flex;
        flex-direction: column;
        align-items: center;
       
       color: #FFFFFF;
    margin-top: 100px;


       input{   
        width: 472px;
        height: 40px;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */

        padding-left: 13px;
        color: rgba(255, 255, 255, 0.7);
        background: transparent;
        outline: none;

        margin-bottom: 16px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 4px;
       }
       p{
        font-style: normal;
         font-weight: normal;
         font-size: 18px;
         line-height: 27px;
         /* identical to box height */

         max-width: 500px;
         text-align:center;
       }

       button{
        width: 180px;
        height: 60px;
        background: #2934D0;
        border-radius: 21px;
        border: none;

        font-size: 16px;
        line-height: 32px;
        /* identical to box height */

        margin-top: 26px;
        color: rgba(255, 255, 255, 0.68);
        cursor: pointer;
       }


       a{
        color: rgb(20 111 227);
       }

`
export const Box = styled.p<{textOpacity: string, marginTop: string}>`
      color: #fff;
      transition: 4s;
      margin-top: ${props => props.marginTop};
    opacity: ${props => props.textOpacity};

    background-color: rgba(255, 255, 255, 0.2);
    padding: 50px 50px ;
    border-radius: 20px;

`