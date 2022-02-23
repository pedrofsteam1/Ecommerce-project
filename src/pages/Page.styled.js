import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1020px;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background-color: gainsboro;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    width: 100%;
    justify-content: center;
    background-color: gainsboro;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 1460px;
    margin: auto;
    min-height: 200px;
`;