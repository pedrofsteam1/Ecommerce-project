import styled from "styled-components";


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    min-height: 200px;
    background-color: transparent;
`;

export const CreateAccWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100%;
    width: 100%;
    max-width: 100%;
    padding: 0px 0px 20px 0px;
`;

export const CreateAccTitle = styled.span`
    display: flex;
    justify-content: center;
    min-width: 100%;
    width: 100%;
    max-width: 100%; 
    font-size: 12px;
    padding: 20px 0px 10px 0px;
`;

export const CreateAccButton = styled.button`
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

    &:hover {
        background-color: rgba(230,230,250,1);
    }
`;