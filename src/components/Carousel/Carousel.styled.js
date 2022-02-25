import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    padding: 20px 30px;
    margin-top: 10px;
    background-color: transparent;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${props => props.color || 'white'};
    padding: 10px 20px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const Text = styled.span`
    display: flex;
    flex-direction: column;
    font-size: calc(9px + 1vmin);
    font-weight: 700;
`;

export const Link = styled.span`
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: calc(5px + 1vmin);
    justify-content: flex-end;
    padding-left: 20px;
    color: blue;
    transition: all ease 0.2s;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        font-size: calc(7px + 1vmin);
    }
`;

export const AdsContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    padding: 5px 0px 5px 0px;
    transition: all ease 2s;
    scrollbar-width: thin;
    z-index: 9999;

    &:hover {
        overflow-x: auto;
    }

    &::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(255,255,255,1);
	border-radius: 10px;
	background-color: transparent;
    }

    &::-webkit-scrollbar {
    height: 6px;
	background-color: transparent;
    }   

    &::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: silver;
    }
`;

export const AdsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
`;

export const Ads = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 10px;
    z-index: 999;
    max-width: 300px;
    transition: all ease 0.3s;
`;

export const AdsTitle = styled.div`
    display: flex;
    font-size: calc(6px + 1vmin);
`;

export const AdsImage = styled.img`
    display: flex;
    cursor: pointer;
`;