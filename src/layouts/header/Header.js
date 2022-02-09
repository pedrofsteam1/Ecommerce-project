import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HideMenu from '../HideMenu/HideMenu';

import NavigationList from '../../services/store/NavigationList.json';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AppsIcon from '@mui/icons-material/Apps';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index:9;
`;

const NavTop = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    background: rgba(0, 0, 25, 1);
    padding-left: 20px;
    padding-right: 20px;
`;

const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    background: rgba(36, 62, 84, 1);
    padding-left: 10px;
    padding-right: 10px;
`;

const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
`;

const NavFill = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: ${props => props.padding || 0};
`;

const NavRight = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
`;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    justify-content: center;
    padding: ${props => props.pad || '0px 10px 0px 10px'};
    cursor: pointer;
    &:hover {
        border: none;
        outline: 1px solid white;
        border-radius: 2px;
    }
`

const Logo = styled.div`
    display: flex;
    width: 100px;
    height: 100%;
    background: green;
`;

const Label = styled.div`
    color: white;
    font-size: ${props => props.size || 'calc(10px + 1vmin)'};
    font-weight: ${props => props.weight || 0};
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    border: none;
    border-radius: 5px;
    background: transparent;
    outline: ${props => props.searching || 'none'};
`;

const SearchSelect = styled.select`
    display: flex;
    height: 100%;
    border: none;
    border-right: 1px solid silver;
    border-radius: 5px 0px 0px 5px;
    padding: 0px 5px 0px 5px;
    background: rgb(240, 240, 255);
`;

const SearchInput = styled.input`
    display: flex;
    flex-grow: 3;
    height: 100%;
    border: none;
    border-radius: 0px;
    padding: 0px 5px 0px 5px;
    outline: none;

    &:focus > div {
        border: 3px solid orange;
        border-radius: 5px;
    }
`;

const SearchButton = styled.button`
    display: flex;
    width: calc(40px + 1vmin);
    height: 100%;
    background: orange;
    border: none;
    border-radius: 0px 5px 5px 0px;
    outline: none;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const HideMenuContainer = styled.div`
    display: ${props => props.toggled};
    z-index: 99;
`;


const Header = () => {

    const [isSearching, setIsSearching] = useState();
    const [isLogged, setIsLogged] = useState(false);
    const [isHideMenuToggled, setIsHideMenuToggled] = useState(false);
    const [toggledHideMenu, setToggleHideMenu] = useState();

    const [SearchList, setSearchList] = useState([
        'Todos',
        'Informatica',
        'Alimentos e Bebidas',
        'Calçados',
        'Eletrodomésticos',
        'Eletronicos',
        'Games',
    ]);

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
                            {SearchList.map((item, key) => (
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
                        <div>
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