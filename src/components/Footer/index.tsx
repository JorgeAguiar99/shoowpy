import React from "react";
import { FooterContainer, FooterText, FooterInnerContainer } from './styles';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterInnerContainer>
                    <FaFacebook style={{ margin: '10 20' }} size={35} />
                    <FaInstagram style={{ margin: '10 20' }} size={35} />
                    <FaTwitter style={{ margin: '10 20' }} size={35} />
                </FooterInnerContainer>
                <FooterText>1º Trabalho do 1º Bimestre - Jorge Aguiar</FooterText>
            </FooterContainer>
        </>
    );
}

export default Footer;
