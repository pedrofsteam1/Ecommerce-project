import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 350px;
    max-width: 350px;
    padding: 20px 20px 20px 20px;
    border: 1px solid rgba(211,211,211,1);
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
    padding-bottom: 20px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
`;

export const Label = styled.label`
    display: flex;
    font-size: 14px;
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
    border: 1px solid rgba(192,192,192,1);
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
    border: 1px solid rgba(192,192,192,1);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.bcolor || 'transparent'};

    &:hover {
        background-color: ${props => props.hcolor || 'transparent'};
    }
`;