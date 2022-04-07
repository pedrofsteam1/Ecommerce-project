import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    padding: 30px 0px 20px 0px;
    justify-content: center;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 200px;
    width: 200px;
    max-width: 200px;
    min-height: 40px;
    height: 40px;
    max-height: 40px;
    justify-content: center;
    align-items: center;
`;


export const LogoImg = styled.img`
    max-width: 100%;
    max-height: 100%;
`;