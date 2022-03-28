import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 37%;
    height: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

export const ImageCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
    min-width: 50px;
    height: 100%;
    padding-top: 30px;
`;


export const ImageRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 55px;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
    cursor: pointer;

    &:hover {
        border: 1px solid orange;
        outline: 1px solid orange;
        border-radius: 3px;
    }
`;

export const ImageRowDisplay = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 100%;
    margin: auto;
`;


export const ImagePortrait = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    max-height: 75%;
    padding: 0px 10px 0px 10px;
    background-color: white;
`;

export const DisplayImage = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 100%;
    margin: auto;
`;