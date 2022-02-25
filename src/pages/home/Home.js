import React from 'react';

import { Container, Main, MainWrapper } from '../Page.styled';
import Amazon from '../../services/store/Carousel/Amazon.json';
import Pessoais from '../../services/store/Carousel/Pessoais.json';
import Pet from '../../services/store/Carousel/Pet.json';

import { 
    Header, 
    Footer, 
    InitialBanner,
    CardList,
    Carousel
} from '../../components';


const Home = () => {


    return(
        <Container>
            <Header></Header>

            <MainWrapper>
                <Main>
                    <InitialBanner></InitialBanner>
                    <CardList></CardList>
                    <Carousel info={Amazon}></Carousel>
                    <Carousel info={Pessoais}></Carousel>
                    <Carousel info={Pet}></Carousel>
                </Main>
            </MainWrapper>

            <Footer></Footer>
        </Container>
    )
}


export default Home;