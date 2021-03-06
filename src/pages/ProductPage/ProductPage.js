import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Main, MainWrapper } from '../Page.styled';
import { ProductContainer, ProductInfoWrapper, ProductWrapper } from './Product.styled';

import pp from '../../services/store/Product/Tvs.json';

import {
    Header,
    Footer,
    Product,
    ProductImage,
    AddCart,
    ProductInfo
} from '../../components';


const ProductPage = () => {
    const location = useLocation();
    const prod = location.state.prod;


    return (
        <Container color='white'>
            <Header></Header>

            <Main>
                <MainWrapper color='white'>
                    <ProductContainer>
                        <ProductWrapper>
                            <ProductImage prod={pp.product[0]}></ProductImage>
                            <Product prod={pp.product[0]}></Product>
                            <AddCart prod={pp.product[0]}></AddCart>
                        </ProductWrapper>

                        <ProductInfoWrapper>
                            <ProductInfo prod={pp.product[0]}></ProductInfo>
                        </ProductInfoWrapper>
                    </ProductContainer>
                </MainWrapper>
            </Main>

            <Footer></Footer>
        </Container>
    )
}


export default ProductPage;