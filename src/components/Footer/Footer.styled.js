import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
`;

export const LinkToTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
    background: rgba(70,130,180,0.7);
    justify-content: center;
    align-items: center;
    font-size: calc(8px + 1vmin);
    color: white;
    cursor: pointer;
`;

export const AccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgba(36, 62, 84, 1);
    justify-content: center;
    padding: 20px 0px 20px 0px;
`;

export const AccessWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
`;

export const AccessDivision = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 50px 0px 50px;
`;

export const AccessName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0px 10px 0px;
    font-size: calc(10px + 1vmin);
    font-weight: 700;
    color: white;
`

export const AccessItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0px 10px 0px;
`;

export const AccessLink = styled(Link)`
    display: flex;
    font-size: calc(8px + 1vmin);
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const AcceptPaymentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid silver;
    padding: 10px 0px 0px 0px;
    margin-top: 50px;
`;


export const AcceptPayment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    font-size: calc(10px + 1vmin);
    color: white;
    padding: 10px 0px 10px 0px;
`;

export const PaymentForms = styled(Link)`
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: calc(8px + 1vmin);
    font-weight: 0;
    color: white;
    padding: 0px 20px 0px 20px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: rgba(0,5,31, 1);
    justify-content: center;
    padding: 20px 0px 20px 0px;
`;  

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoDivision = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0px 20px 0px;
    font-size: calc(6px + 1vmin);
    color: white;
`;


export const InfoLink = styled(Link)`
    display: flex;
    font-size: calc(6px + 1vmin);
    color: white;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;

export const InfoSeparator = styled.div`
    display: flex;
    font-size: calc(6px + 1vmin);
    color: white;
    padding: 0px 10px 0px 10px;
`;