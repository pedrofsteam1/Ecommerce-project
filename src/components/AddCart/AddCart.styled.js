import { rgbToHex } from '@material-ui/core';
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    max-width: 18%;
    height: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid rgba(169,169,169, 0.5);
    border-radius: 5px;
    padding: 15px 15px 15px 15px;
`;

export const Price = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    font-size: calc(9px + 1vmin);
    padding-bottom: 20px;
`;

export const Inventory = styled.div`
    display: flex;
    width: 100%;
    font-size: calc(8px + 1vmin);
    padding-bottom: 20px;
    color: ${props => props.color || "rgb(60,179,113)"};
`;

export const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 20px;
    font-size: calc(7px + 1vmin);
`;

export const QtdSelect = styled.select`
    margin-left: 5px;
    padding: 0px 5px 0px 5px;
    font-size: calc(7px + 1vmin);
`;


export const AddCartButton = styled.button`
    display: flex;
    width: 100%;
    height: 35px;
    font-size: calc(6px + 1vmin);
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    border: none;
    outline: none;
    border-radius: 20px;
    margin-bottom: 15px;
    cursor: pointer;
`;

export const Transaction = styled.div`
    display: flex;
    width: 100%;
    font-size: calc(8px + 1vmin);
    padding-bottom: 20px;
    color: ${props => props.color || "rgb(60,179,113)"};
`;

export const Send = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 5px;
    font-size: calc(6px + 1vmin);
`;

export const Sold = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 20px;
    font-size: calc(6px + 1vmin);
`;


export const WarrantyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
`;

export const WarrantyTitle = styled.span`
    display: flex;
    width: 100%;
    font-size: calc(6px + 1vmin);
    font-weight: 700;
    padding-bottom: 3px;
`;

export const WarrantyOptions = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const WarrantyCheck = styled.input`
    display: flex;
`;

export const WarrantyLabel = styled.label`
    display: flex;
    font-size: calc(6px + 1vmin);
`;

export const GiftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 20px;
`;

export const GiftCheck = styled.input`
    display: flex;
`;

export const GiftLabel = styled.label`
    display: flex;
    font-size: calc(6px + 1vmin);
`;

export const ListAdd = styled.button`
    display: flex;
    width: 100%;
    height: 35px;
    font-size: calc(6px + 1vmin);
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid black;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`;
