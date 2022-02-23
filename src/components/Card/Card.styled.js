import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: transparent;
    margin-top: -400px;
    z-index: 9999;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    max-height: 800px;
    min-width: 1020px;
    max-width: 1440px;
    background-color: transparent;

    @media screen and (max-width: 1377px) {
        max-height: 1200px;
    }
`;


export const CardContainer = styled.div`
    display: flex;
    min-width: 340px;
    max-width: 360px;
    width: 100%;
    height: 380px;
    padding: 10px 20px 0px 20px;
    background-color: transparent;
    margin-top: 20px;
`;

export const Inside = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 15px 15px 15px 15px;
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    font-size: calc(10px + 1vmin);
    font-weight: 700;
    color: black;
`;

export const AdsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Ads = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.wid || '100%'};
    height: ${props => props.hei || '235px'};
    background-color: transparent;
    padding-top: 10px;
    font-size: calc(5px + 1vmin);
    cursor: pointer;
`;

export const AdsImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const AdsImg = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const AdsDesc = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Desc = styled.span`
    font-size: calc(5px + 1vmin);
`;

export const End = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    min-height: 40px;
    align-items: flex-end;
    font-size: calc(5px + 1vmin);
    color: blue;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: orange;
    }
`;

