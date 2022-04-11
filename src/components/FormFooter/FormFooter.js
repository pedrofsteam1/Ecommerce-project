import React from 'react';

import {
    Container,
    Wrapper,
    LinkRow,
    LinkWrapper,
    HyperLink,
    Info
} from './FormFooter.styled';

const FormFooter = () => {


    return (
        <Container>
            <Wrapper>
                <LinkRow>
                    <LinkWrapper>
                        <HyperLink to={'/'}>Condições de Uso</HyperLink>
                    </LinkWrapper>

                    <LinkWrapper>
                        <HyperLink to={'/'}>Política de Privacidade</HyperLink>
                    </LinkWrapper>

                    <LinkWrapper>
                        <HyperLink to={'/'}>Ajuda</HyperLink>
                    </LinkWrapper>

                    <LinkWrapper>
                        <HyperLink to={'/'}>Cookies</HyperLink>
                    </LinkWrapper>

                    <LinkWrapper>
                        <HyperLink to={'/'}>Anúncios Baseados em Interesses</HyperLink>
                    </LinkWrapper>
                </LinkRow>

                <Info>© 2021-2022 Amazon.com, Inc. ou suas afiliadas</Info>
            </Wrapper>
        </Container>
    )
}


export default FormFooter;