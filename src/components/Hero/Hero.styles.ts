import styled from "styled-components";

import bgright from '../../assets/imgs/hero-img.jpg'

export const Container= styled.div`
background-color: royalblue;
height: calc(100vh - 106px);
width:100%;

display: flex;
justify-content: center;
align-items: stretch;
`

export const ContentLeft = styled.div`
 background-color: orange;
 width:50%;
`

export const ContentRight = styled.div`
background-color: magenta;
flex:1;

background-image: url(${bgright});
background-position: center;
background-size: cover;
`