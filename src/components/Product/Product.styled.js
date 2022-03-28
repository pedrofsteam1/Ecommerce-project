import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    max-width: 45%;
    height: 100%;
    padding: 0px 20px 0px 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;


export const Title = styled.div`
    display: flex;
    width: 100%;
    font-size: calc(14px + 1vmin);
    font-weight: 700;
`;

export const Brand = styled.div`
    display: flex;
    width: 100%;
    padding: 5px 0px 5px 0px;
    font-size: calc(6px + 1vmin);
    color: rgb(70,130,180);
`;

export const Price = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0px 30px 0px;
    font-size: calc(9px + 1vmin);
    border-bottom: 1px solid rgba(169,169,169, 0.5);
`;

export const CharsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0px 10px 0px;
    font-size: calc(9px + 1vmin);
    border-bottom: 1px solid rgba(169,169,169, 0.5);
`;

export const Chars = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 10px;
`;


export const CharName = styled.div`
    display: flex;
    width: 35%;
    max-width: 35%;
    min-width: 35%;
    font-size: calc(8px + 1vmin);
    font-weight: 700;
`;

export const CharValue = styled.div`
    display: flex;
    width: 65%;
    max-width: 65%;
    padding-left: 10px;
    font-size: calc(8px + 1vmin);
`;

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 10px 0px 10px 0px;
`;

export const AboutLabel = styled.span`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    font-size: calc(8px + 1vmin);
    font-weight: 700;
`;

export const About = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    font-size: calc(8px + 1vmin);
    font-weight: 0;
    padding: 10px 0px 10px 0px;
`;