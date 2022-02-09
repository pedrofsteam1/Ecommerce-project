import React from 'react';
import styled from 'styled-components';


import { Header, Footer } from '../../layouts/Layouts';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1020px;
    width: 100%;
    max-width: 100vw;
    min-height: 100vw;
    background: grey;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    width: 100%;
    background: red;
`;


const Home = () => {


    return(
        <Container>
            <Header></Header>

            <Main>

            </Main>

            <Footer></Footer>
        </Container>
    )
}


export default Home;