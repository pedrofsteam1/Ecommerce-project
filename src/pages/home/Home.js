import React from 'react';

import { Container, Main, MainWrapper } from '../Page.styled';

import { 
    Header, 
    Footer, 
    InitialBanner
} from '../../components';




const Home = () => {


    return(
        <Container>
            <Header></Header>

            <MainWrapper>
                <Main>
                    <InitialBanner></InitialBanner>
                </Main>
            </MainWrapper>

            <Footer></Footer>
        </Container>
    )
}


export default Home;