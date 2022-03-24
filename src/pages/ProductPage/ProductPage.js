import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Main, MainWrapper } from '../Page.styled';

import {
    Header,
    Footer
} from '../../components';


const ProductPage = () => {
    const location = useLocation();
    const prod = location.state.prod;

    return (
        <Container>
            <Header></Header>

            <Main>
                <MainWrapper>
                    
                </MainWrapper>
            </Main>

            <Footer></Footer>
        </Container>
    )
}


export default ProductPage;