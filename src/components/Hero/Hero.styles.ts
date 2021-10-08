import styled from "styled-components";

import bgright from '../../assets/imgs/hero-img.jpg'
import bgleft from '../../assets/svgs/curves.svg'

export const Container= styled.div`
/* background-color: royalblue; */
height: calc(100vh - 106px);
width:100%;

display: flex;
justify-content: center;
align-items: stretch;
`

export const ContentLeft = styled.div`
 /* background-color: orange; */
 width:50%;

 background-image: url(${bgleft});
background-position: 0% 120% ;
background-size: 400px 400px;
background-repeat: no-repeat;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

padding: 0px 40px;
`

export const ContentRight = styled.div`
background-color: magenta;
flex:1;

background-image: url(${bgright});
background-position: center;
background-size: cover;
`


export const Title= styled.h1`
 font-size: 56px;
 line-height: 79px;
 font-weight: 600;
`

export const ButtonLarge= styled.button`
 padding: 15px 40px;
 border-radius: 30px;
 background-color: #ffcc00;
 display: flex;
 justify-content: center;
 align-items: center;

 border:none;
 
`

export const Icon= styled.div`
 margin: 0px 15px;
`