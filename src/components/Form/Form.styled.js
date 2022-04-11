import styled from "styled-components";
import {Link} from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 350px;
    max-width: 350px;
    padding: 20px 20px 20px 20px;
    border: 1px solid rgba(211,211,211,1);
    border-radius: 5px;
`;

export const FormTitle = styled.div`
    display: flex;
    padding-bottom: 20px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    font-size: 22px;
    font-weight: 700;

`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
`;

export const Label = styled.label`
    display: flex;
    font-size: ${props => props.fsize || '14px'};
    padding-bottom: 2px;
`;

export const Input = styled.input`
    display: flex;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 30px;
    min-height: 30px;
    max-height: 30px;
    font-size: 14px;
    padding-left: 5px;
    border: 1px solid rgba(128,128,128,0.8);
    border-radius: 3px;
    outline: none;

    &:focus {
        border: 1px solid orange;
    }
`;

export const Button = styled.button`
    display: table-cell;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 35px;
    min-height: 30px;
    max-height: 30px;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border: 1px solid rgba(128,128,128,0.8);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.bcolor || 'transparent'};

    &:hover {
        background-color: ${props => props.hcolor || 'transparent'};
    }
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: ${props => props.pad || '20px 0px 20px 0px'};
`;


export const HelpLink = styled(Link)`
    display: flex;
    font-size: ${props => props.fsize || '12px'};
    color: ${props => props.color || 'blue'};
    text-decoration: none;
    padding-left: ${props => props.padLeft || '0px'};

    &:hover {
        color: rgba(255,140,0,0.8);
        text-decoration: underline;
    }
`;