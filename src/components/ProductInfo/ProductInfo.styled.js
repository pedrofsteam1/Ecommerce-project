import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid rgba(169,169,169, 0.7);
    padding-bottom: 30px;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    margin-left: ${props => props.mleft || '0'};
`;

export const DetailsTitle = styled.div`
    display: flex;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    font-size: calc(8px + 1vmin);
    font-weight: 700;
    padding: 0px 0px 5px 0px;
    margin-bottom: 15px;
    color: ${props => props.color || 'black'};
    border-bottom: ${props => props.border || '1px solid rgba(169,169,169, 1)'};
`;

export const DetailsRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid rgba(169,169,169, 0.5);
    border-collapse: collapse;
`;

export const DetailsLabel = styled.div`
    display: flex;
    width: 50%;
    min-width: 50%;
    max-width: 50%;
    font-size: calc(8px + 1vmin);
`;

export const DetailsValue = styled.div`
    display: flex;
    width: 50%;
    min-width: 50%;
    max-width: 50%;
    font-size: calc(8px + 1vmin);
`;

