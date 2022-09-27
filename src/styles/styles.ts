import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif; 
    }
    #root{
        margin:0 ;
        padding: 0;
        box-sizing:'border-box';
        font-family: 'Poppins', sans-serif; 
        background-color: #1d0934;
        background-image: linear-gradient(10deg, #1d0934 35%, #500321 98%, #460f1c 100%);


    }
    `;
