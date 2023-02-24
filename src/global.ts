import {
    createGlobalStyle,
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #fff;
        --black: #212529;
    }

    *{
        margin: 0px;
        padding: 0px;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    border-style, input, textarea, button{
        font-family: Tahoma, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
