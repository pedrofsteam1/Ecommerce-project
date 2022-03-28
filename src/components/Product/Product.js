import React, { useEffect } from 'react';

import {
    Container,
    Wrapper,
    Title,
    Brand,
    Price,
    CharsWrapper,
    Chars,
    CharName,
    CharValue,
    About,
    AboutWrapper,
    AboutLabel,
} from './Product.styled';

const Product = ({ prod }) => {


    return(
        <Container>
            <Wrapper>
                <Title>{prod.title}</Title>
                <Brand>{prod.brand}</Brand>
                <Price>{prod.price}</Price>

                <CharsWrapper>
                    {prod.chars.name.map((item, key) => (
                        <Chars key={key}>
                            <CharName>{item}</CharName>
                            <CharValue>{prod.chars.value[key]}</CharValue>
                        </Chars>
                    ))}
                </CharsWrapper>

                <AboutWrapper>
                    <AboutLabel>Sobre este item</AboutLabel>
                    <About>{prod.about}</About>
                </AboutWrapper>
            </Wrapper>
        </Container>
    )
}


export default Product;