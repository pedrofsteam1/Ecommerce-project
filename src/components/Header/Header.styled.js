import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index:9;
`;

export const NavTop = styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    background: rgba(0, 0, 25, 1);
    padding-left: 20px;
    padding-right: 20px;
`;

export const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    background: rgba(36, 62, 84, 1);
    padding-left: 10px;
    padding-right: 10px;
`;

export const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const NavFill = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: ${props => props.padding || 0};
`;

export const NavRight = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const NavWrapper = styled.div`
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

export const Logo = styled.div`
    display: flex;
    width: 100px;
    height: 100%;
    background: green;
`;

export const Label = styled.div`
    color: white;
    font-size: ${props => props.size || 'calc(10px + 1vmin)'};
    font-weight: ${props => props.weight || 0};
`;

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    border: none;
    border-radius: 5px;
    background: transparent;
    outline: ${props => props.searching || 'none'};
`;

export const SearchSelect = styled.select`
    display: flex;
    height: 100%;
    border: none;
    border-right: 1px solid silver;
    border-radius: 5px 0px 0px 5px;
    padding: 0px 5px 0px 5px;
    background: rgb(240, 240, 255);
`;

export const SearchInput = styled.input`
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

export const SearchButton = styled.button`
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

export const HideMenuContainer = styled.div`
    display: ${props => props.toggled};
    z-index: 99;
`;
