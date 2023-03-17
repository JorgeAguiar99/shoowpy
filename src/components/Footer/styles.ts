import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: auto;
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    position: fixed;
    bottom: 0px;
    padding: 10px 0px;
`

export const FooterInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
`

export const FooterText = styled.p`
    font-size: 1.2rem;
`
