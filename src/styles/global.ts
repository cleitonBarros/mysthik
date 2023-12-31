import { createGlobalStyle } from "styled-components";
import '@radix-ui/themes/styles.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        scroll-behavior:smooth;
    }

    #root{
        overflow: hidden;

    }
    body{
        background: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }

    html ::-webkit-scrollbar {
        width: 4px;
    }

    html ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.HOTPINK};
    }
    
    html ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.COLORS.BLACK};
    }
    .text, 
    .card-1,
    .card-2,
    .card-3,
    .paragraph, 
    .button {
    visibility: hidden;
    }

`;
