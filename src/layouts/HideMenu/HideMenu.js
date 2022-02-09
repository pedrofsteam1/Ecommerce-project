import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
    position: absolute;
    display: 'flex';
    top:0;
    left:0;
    bottom:0;
    right:0;
    height: 100vw;
    width: 100%;
    z-index: 99;
    background: rgba(28,28,28, 0.8);
`;

const MenuContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 370px;
    height: 100vh;
    background: white;
    z-index: 999;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    min-height: 50px;
    padding-left: 30px;
    align-items: center;
    background: rgba(36, 62, 84, 1);
`;

const HeaderText = styled.label`
    font-size: calc(10px + 1vmin);
    font-weight: 700;
    color: white;
    margin-left: 10px;
`;

const DivisionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
`;

const Division = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid silver;
    padding: 10px 0px 10px 0px;
`;

const DivisionName = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0px 10px 30px;
    align-items: center;
    font-size: calc(10px + 1vmin);
    font-weight: 700;
`;

const DivisionItems = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0px 10px 30px;
    align-items: center;
    text-align: center;
    font-size: calc(8px + 1vmin);
    cursor: pointer;

    &:hover {
        background: rgba(248,248,255, 1);
    }
`;

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