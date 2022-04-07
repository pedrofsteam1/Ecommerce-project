import React from 'react';

import {
    Container,
    LogoWrapper,
    LogoImg
} from './Logo.styled'

const Logo = () => {


    return(
        <Container>
            <LogoWrapper>
                <LogoImg src='/Logo/amazon-logo.png'></LogoImg>
            </LogoWrapper>
        </Container>
    )
}

export default Logo;