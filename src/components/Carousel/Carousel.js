import React, { useEffect } from 'react';

import {
    Container,
    Wrapper,
    Title,
    Text,
    Link,
    AdsContainer,
    Ads,
    AdsWrapper,
    AdsTitle,
    AdsImage
} from './Carousel.styled';

const Carousel = ({ info }) => {
    

    return(
        <Container>
            <Wrapper>
                <Title>
                    <Text>{info.carousel.title}</Text>
                    <Link>{info.carousel.end}</Link>
                </Title>

                <AdsContainer>
                    <AdsWrapper>
                        {info.carousel.ads.map((item, key) => (
                            <Ads key={key}>
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