import React from 'react'
import {Container,ContentLeft,ContentRight, Title,ButtonLarge,Icon} from '../Hero/Hero.styles'
import rightArrow from '../../assets/svgs/arro-right.svg'


const Hero = () => {
    return (
        <Container>
            <ContentLeft>
                <Title >Somos apaixonados por tecnologia, inovação e pessoas.</Title>
                <ButtonLarge>Saiba mais sobre a maida 
                    <Icon>
                    <img src={rightArrow} alt="" />
                    </Icon>
                </ButtonLarge>
            </ContentLeft>
            <ContentRight>
              direita
            </ContentRight>
        </Container>
    )
}

export default Hero
