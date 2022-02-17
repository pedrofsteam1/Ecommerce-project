import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1020px;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background: transparent;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 200px;
    width: 100%;
    justify-content: center;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 7.5% 0px 7.5%;
    margin: auto;
    min-height: 200px;
`;