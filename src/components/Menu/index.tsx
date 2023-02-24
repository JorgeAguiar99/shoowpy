import React from 'react'
import { NavbarContainer, NavbarLink, NavbarLinkExtend, NavInnerContainer } from './styles'

export const Menu = () => {
    return(
        <NavbarContainer>
            <NavInnerContainer>

                <NavbarLinkExtend>
                    Shoowpy
                </NavbarLinkExtend>

                <NavbarLink>Home</NavbarLink>

            </NavInnerContainer>
        </NavbarContainer>
    )
}
