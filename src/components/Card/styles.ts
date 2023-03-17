import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 18rem;
    margin: 10px;
    border: 1px solid #D2D2D2;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardPriceBefore = styled.p`
    text-decoration: line-through;
`

export const CardPriceActual = styled.strong`
    color: red;
`

export const CardButton = styled.button`
    border: 0;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--blue);//utilizar variavel styled components
    margin-top: 10px;
`

export const CardButtonText = styled.h3`
    color: var(--white);
`
