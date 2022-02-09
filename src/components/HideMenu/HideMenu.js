import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
    Container,
    MenuContainer,
    Header,
    HeaderText,
    DivisionContainer,
    Division,
    DivisionName,
    DivisionItems
} from './HideMenu.styled';

const HideMenu = ({hideMenu, isLogged}) => {

    const [welcome, setWelcome] = useState();
 
    const CloseMenu = (e) => {
        if (e.target.id === 'HideMenuClose') {
            document.body.style.overflow = 'auto';
            hideMenu(false);
        }
    }

    useEffect(() => {
        if (isLogged) {
            setWelcome('Olá, Pedro');
        }
        else {setWelcome('Olá, Faça seu login')}
    },[isLogged])

    return (
        <Container id={'HideMenuClose'} onClick={(e) => CloseMenu(e)}>
            <MenuContainer>
                <Header>
                    <AccountCircleIcon style={{fontSize: 30, color: 'white'}}></AccountCircleIcon>
                    <HeaderText>{welcome}</HeaderText>
                </Header>

                <DivisionContainer>
                    <Division>
                        <DivisionName>Destaques</DivisionName>
                        <DivisionItems>Mais Vendidos</DivisionItems>
                        <DivisionItems>Novidades</DivisionItems>
                        <DivisionItems>Em Alta</DivisionItems>
                    </Division>

                    <Division>
                        <DivisionName>Destaques</DivisionName>
                        <DivisionItems>Mais Vendidos</DivisionItems>
                        <DivisionItems>Novidades</DivisionItems>
                        <DivisionItems>Em Alta</DivisionItems>
                    </Division>

                    <Division>
                        <DivisionName>Destaques</DivisionName>
                        <DivisionItems>Mais Vendidos</DivisionItems>
                        <DivisionItems>Novidades</DivisionItems>
                        <DivisionItems>Em Alta</DivisionItems>
                    </Division>

                    <Division>
                        <DivisionName>Destaques</DivisionName>
                        <DivisionItems>Mais Vendidos</DivisionItems>
                        <DivisionItems>Novidades</DivisionItems>
                        <DivisionItems>Em Alta</DivisionItems>
                    </Division>

                    <Division>
                        <DivisionName>Destaques</DivisionName>
                        <DivisionItems>Mais Vendidos</DivisionItems>
                        <DivisionItems>Novidades</DivisionItems>
                        <DivisionItems>Em Alta</DivisionItems>
                    </Division>
                </DivisionContainer>
            </MenuContainer>
        </Container>
    )
}


export default HideMenu;