import React from 'react';

import Store from '../../services/store/Cards/BrowserStore.json';
import Devices from '../../services/store/Cards/Devices.json';
import DayOffers from '../../services/store/Cards/DayOffers.json';
import Prime from '../../services/store/Cards/Prime.json';
import Frete from '../../services/store/Cards/Frete.json';
import Music from '../../services/store/Cards/Music.json';
import Kindle from '../../services/store/Cards/Kindle.json';

import {
    Container,
    Wrapper
} from './Card.styled';

import Card from './Card'


const CardList = () => {


    return(
        <Container>
            <Wrapper>
                <Card Info={Store} Single={false} w={'48%'} h={'48%'}></Card>
                <Card Info={Devices} Single={false} w={'48%'} h={'48%'}></Card>
                <Card Info={Music} Single={true} w={'100%'} h={'100%'}></Card>
                <Card Info={DayOffers} Single={true} w={'100%'} h={'235px'}></Card>
                <Card Info={Prime} Single={true} w={'100%'} h={'100%'}></Card>
                <Card Info={DayOffers} Single={true} w={'100%'} h={'235px'}></Card>
                <Card Info={Kindle} Single={true} w={'100%'} h={'100%'}></Card>
                <Card Info={Frete} Single={true} w={'100%'} h={'100%'}></Card>
            </Wrapper>
        </Container>
    )
}


export default CardList;