import React, { useEffect, useState } from 'react'
import {
    LeftContainer,
    NavbarContainer,
    NavbarExtendContainer,
    NavbarLink,
    NavbarLinkExtend,
    NavInnerContainer,
    OpenLinkButton,
    RightContainer
} from './styles'

// https://github.com/profchines

interface interfData {
    id: number,
    categoria: string
}

export const Menu = () => {
    const [extendNavbar, setExtendNavBar] = useState(false);
    const [dataMenu, setMenu] = useState<Array<interfData>>([]);

    useEffect(() => {

        setMenu([
            {
                id: 1,
                categoria: 'Telefonia'
            },
            {
                id: 2,
                categoria: 'Eletrodomesticos'
            },
        ])

    }, [])

    return (
        <NavbarContainer
            extendNavbar={extendNavbar}
        >
            <NavInnerContainer>
                <LeftContainer>

                    <OpenLinkButton
                        onClick={() => {

                            setExtendNavBar((atual) => !atual)

                        }}
                    >
                        {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </OpenLinkButton>

                    <NavbarLinkExtend
                        to='/'
                    >
                        Shoowpy
                    </NavbarLinkExtend>

                    <NavbarLink to='/'>Home</NavbarLink>
                    {
                        dataMenu.map((menu) => (
                            <NavbarLink
                                key={menu.id}
                                to='/'
                            >
                                {
                                    menu.categoria
                                }
                            </NavbarLink>
                        ))
                    }

                    <NavbarLink to='/'>Moveis</NavbarLink>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkExtend to='/' >
                        Carrinho
                    </NavbarLinkExtend>
                </RightContainer>
            </NavInnerContainer>

            {
                extendNavbar && (
                    <NavbarExtendContainer>
                        <NavbarLinkExtend to='/'>Home</NavbarLinkExtend>
                        <NavbarLinkExtend to='/'>Telefonia</NavbarLinkExtend>
                        <NavbarLinkExtend to='/'>Moveis</NavbarLinkExtend>
                    </NavbarExtendContainer>
                )
            }

        </NavbarContainer>
    )
}
