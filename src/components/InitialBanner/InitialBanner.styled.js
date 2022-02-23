import styled from 'styled-components';


export const BannerContainer = styled.div`
    display: flex;
    flex-direction:column;
    position: relative;
    min-width: 100%;
    width: 100%;
    height: 700px;
`;

export const BannerImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const BannerImageList = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap; 
    transition: transform 0.5s;
    -webkit-transition: transform  0.5s;
    -moz-transition: transform 0.5s;
    transform: ${props => props.move};
`;

export const BannerImageContainer = styled.div`
    display: inline-flex;
    width: 100%;
    min-width: 100%;
    height: 100%;
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
`;


export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: linear-gradient(to top, gainsboro 10%, transparent 70%);
`;


export const ArrowsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 300px;
    background-color: transparent;
`;


export const Arrow = styled.div`
    display: flex;
    flex-direction: row;
    width: 80px;
    height: 100%;
    margin-left: ${props => props.left};
    top: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;

    &:focus {
        border: 2px solid black;
    }
`;