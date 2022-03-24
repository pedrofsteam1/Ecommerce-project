import React, { useEffect } from 'react';

import {
    Container,
    Wrapper,
    Title,
    Text,
    LinkTitle,
    AdsContainer,
    Ads,
    AdsWrapper,
    AdsTitle,
    AdsImage,
    Arrows
} from './Carousel.styled';

const Carousel = ({ info }) => {
    

    return(
        <Container>
            <Wrapper>
                <Title>
                    <Text>{info.carousel.title}</Text>
                    <LinkTitle>{info.carousel.end}</LinkTitle>
                </Title>

                <AdsContainer>
                    <AdsWrapper>
                        {info.carousel.ads.map((item, key) => (
                            <Ads key={key} to="/product" state={{prod: item}}>
                                <AdsImage src={item.image}></AdsImage>
                            </Ads>
                        ))}
                        
                    </AdsWrapper>
                </AdsContainer>   
            </Wrapper>
        </Container>
    )
}


export default Carousel;