import React from 'react'
import {Nav, LogoWrapper,MobileButton,Logobox,Menu, MenuLink} from './Navbar.styles'

import maida from '../../assets/svgs/maida.svg';
import closeIcon from '../../assets/svgs/x-blue.svg'

const Navbar = () => {
    return (
        <Nav>
            <LogoWrapper>
                <MobileButton></MobileButton>
                <Logobox><img src={maida} alt="maida" /></Logobox>
            </LogoWrapper>

            <Menu>
               <MenuLink to='/'><img src={closeIcon} alt="" /></MenuLink>
               
               <MenuLink to='/'>Início</MenuLink>
               <MenuLink to='/sobre'>Sobre nós</MenuLink>
               <MenuLink to='/talentos'>Talentos</MenuLink>
               <MenuLink to='/blog'>Blog</MenuLink>
               <MenuLink to='/contato'>Entre em contato</MenuLink>
            </Menu>

        </Nav>
    )
}

export default Navbar
