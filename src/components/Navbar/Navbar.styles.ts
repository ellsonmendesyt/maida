import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const LogoWrapper= styled.div`

`

export const Logobox = styled.div``

export const MobileButton = styled.div``

// em 1006px o menu vai pra direita e aparece o menu hamburger antes da logo
export const Menu = styled.ul`
/* outline:1px solid orange; */
display:flex;




`

export const MenuLink = styled(Link)`
font-size:1.2rem;
font-weight: 600;
text-decoration: none;
padding: 0 10px;
/* color: #2b45d4; */
color:#727272;
position:relative;

/* &:after{
  content:'';
  display: block;
  position: absolute;
  bottom:0px;
  left:10px;
  height:2px;
  width:100%;
  background-color: blue;
} */


`


export const Nav = styled.nav`
background-color: transparent;
border-bottom: .5px solid #ddd;
padding: 20px 30px;
position:relative;
display: flex;
justify-content: space-between;
align-items: center;
height:106px;

${MenuLink}:first-child{
        display: none;
    }


@media (max-width:1006px){
    ${Menu}{
    position:absolute;
    top:0px;
    left:0px;
    width: 468px;
    height:100vh;
    background-color: transparent;
    outline:1px solid orange;

    flex-direction: column;
    padding-top: 105px;

    /* navlink */
    ${MenuLink}{
        padding:15px;
    }
    ${MenuLink}:first-child{
        display: block;
    }
   
 }
}

`