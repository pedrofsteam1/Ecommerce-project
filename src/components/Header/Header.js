import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


import HideMenu from '../HideMenu/HideMenu';

import NavigationList from '../../services/store/NavigationList.json';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AppsIcon from '@mui/icons-material/Apps';

import {
    Container,
    NavTop,
    NavMain,
    NavLeft,
    NavFill,
    NavRight,
    NavWrapper,
    Logo,
    Label,
    SearchWrapper,
    SearchInput,
    SearchSelect,
    SearchButton,
    HideMenuContainer
} from './Header.styled';

const Header = () => {

    const navigate = useNavigate();

    const [isSearching, setIsSearching] = useState();
    const [isLogged, setIsLogged] = useState(false);
    const [isHideMenuToggled, setIsHideMenuToggled] = useState(false);
    const [toggledHideMenu, setToggleHideMenu] = useState();

    const showHideMenu = (val) => {
        setIsHideMenuToggled(val);
    }

    useEffect(() => {
        if (isHideMenuToggled) {
            document.body.style.overflow = 'hidden';
            setToggleHideMenu('flex');
        }
        else {
            setToggleHideMenu('none');
        }
    },[isHideMenuToggled]);

    return(
        <Container>
            <NavTop>
                <NavLeft>
                    <NavWrapper>
                        <Logo></Logo>
                    </NavWrapper>

                    <NavWrapper>
                        <Label size={'calc(6px + 1vmin)'}>Olá</Label>
                        <Label size={'calc(6px + 1vmin)'} weight={700}>Seja Bem Vindo!</Label>
                    </NavWrapper>
                </NavLeft>

                <NavFill padding={'10px 30px 10px 30px'}>
                    <SearchWrapper tabIndex={1} searching={isSearching}>
                        <SearchSelect>
                            <option>Todos</option>
                            {NavigationList.List.map((item, key) => (
                                <option key={key} >{item}</option>
                            ))}
                        </SearchSelect>

                        <SearchInput type='text' onFocus={(e) => setIsSearching('3px solid orange')} onBlur={(e) => setIsSearching('none')}></SearchInput>

                        <SearchButton><SearchIcon style={{fontSize: 25}}></SearchIcon></SearchButton>
                    </SearchWrapper>
                </NavFill>

                <NavRight>
                    <NavWrapper>
                        {isLogged ? <div>Logged</div> : 
                        <div onClick={() => navigate('/login', { replace: true })}>
                            <Label size={'calc(6px + 1vmin)'}>Olá,</Label>
                            <Label size={'calc(6px + 1vmin)'} weight={700}>Faça seu Login</Label>
                        </div>}
                    </NavWrapper>

                    <NavWrapper>
                        <Label size={'calc(6px + 1vmin)'}>Devoluções</Label>
                        <Label size={'calc(6px + 1vmin)'} weight={700}>e Pedidos</Label>
                    </NavWrapper>

                    <NavWrapper direction={'row'} style={{alignItems: 'center'}}>
                        <ShoppingCartCheckoutIcon style={{fontSize: 30, color: 'white'}}></ShoppingCartCheckoutIcon>
                        <Label size={'calc(6px + 1vmin)'} weight={700}>Carrinho</Label>
                    </NavWrapper>
                </NavRight>
            </NavTop>

            <NavMain>
                <NavLeft>
                    <NavWrapper direction={'row'} style={{alignItems: 'center'}} onClick={(e) => showHideMenu(true)}>
                        <AppsIcon style={{fontSize: 30, color: 'white'}}></AppsIcon>
                        <Label size={'calc(6px + 1vmin)'} weight={700}>Departamentos</Label>
                    </NavWrapper> 
                    <HideMenuContainer toggled={toggledHideMenu}>
                        <HideMenu hideMenu={showHideMenu} isLogged={isLogged}></HideMenu>
                    </HideMenuContainer>
                </NavLeft>

                <NavFill padding={'5px 30px 5px 30px'}>
                    {NavigationList.List.map((item, key) => (
                        <NavWrapper pad={'0px 15px 0px 15px'} key={key} styel={{overflowX: 'hidden'}}>
                            <Label size={'calc(7px + 1vmin)'}>{item}</Label>
                        </NavWrapper>
                    ))}
                </NavFill>
            </NavMain>
        </Container>
    )
}


export default Header;