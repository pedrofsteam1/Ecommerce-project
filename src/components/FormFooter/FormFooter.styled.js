import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    padding-top: 15px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(211,211,211,1);
`;

export const LinkRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px 10px 0px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    padding: 0px 15px 0px 15px;
`;

export const HyperLink = styled(Link)`
    text-decoration: none;
    font-size: calc(4px + 1vmin);
    color: blue;

    &:hover {
        color: rgba(255,140,0,0.8);
        text-decoration: underline;
    }
`;

export const Info = styled.div`
    display: flex;
    padding: 5px 0px 5px 0px;
    font-size: calc(3px + 1vmin);
`;