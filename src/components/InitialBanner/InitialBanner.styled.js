import styled from 'styled-components';


export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 600px;
`;

export const BannerImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;     
    transition: all 1s;
`;

export const BannerImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    width: 100%;
    height: 100%;
`;

export const BannerImage = styled.img`
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
`;


export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, white 10%, transparent 70%);
`;


export const ArrowsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 250px;
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