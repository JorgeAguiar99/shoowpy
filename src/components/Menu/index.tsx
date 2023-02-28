import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LeftContainer, NavbarContainer, NavbarExtendContainer, NavbarLink, NavbarLinkExtend, NavInnerContainer, OpenLinkButton, RightContainer } from "./styles";

interface interfData {
    id: number,
    categoria: string,
    caminho: string
}

export const Menu = () => {

    const [extendNavbar, setExtendNavbar] = useState(false);
    const [dataMenu, setMenu] = useState<Array<interfData>>([]);

    useEffect(() => {
        setMenu([
            {
                id: 1,
                categoria: 'Telefonia',
                caminho: '/telefonia'
            },
            {
                id: 2,
                categoria: 'Eletrodomésticos',
                caminho: '/eletrodomesticos'
            }
        ]);
    }, []);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavInnerContainer>
                <LeftContainer>

                    <OpenLinkButton
                        onClick={() => {
                            setExtendNavbar((atual) => !atual);
                        }}
                    >
                        {extendNavbar ? <> &#10005;</> : <>&#8801;</>}
                    </OpenLinkButton>

                    <NavbarLinkExtend to='/'> Shoowpy </NavbarLinkExtend>

                    <NavbarLink to='/'>Home</NavbarLink>
                    {
                        dataMenu.map((menu) => (
                            <NavbarLink
                                key={menu.id}
                                to={menu.caminho ? menu.caminho : '/'}
                            >
                                {
                                    menu.categoria
                                }
                            </NavbarLink>

                        ))
                    }

                </LeftContainer>
                <RightContainer>
                    <NavbarLinkExtend to='/produto'> Carrinho </NavbarLinkExtend>
                </RightContainer>

            </NavInnerContainer>

            {
                extendNavbar && (
                    <NavbarExtendContainer>
                        <NavbarLinkExtend to='/'> Home </NavbarLinkExtend>
                        <NavbarLinkExtend to='/'> Telefonia </NavbarLinkExtend>
                        <NavbarLinkExtend to='/'> Móveis </NavbarLinkExtend>
                    </NavbarExtendContainer>
                )
            }

        </NavbarContainer>
    );
};
