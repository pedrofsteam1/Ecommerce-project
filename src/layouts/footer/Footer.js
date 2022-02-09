import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const LinkToTop = styled.div`
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

const AccessContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: rgba(36, 62, 84, 1);
    justify-content: center;
    padding: 20px 0px 20px 0px;
`;

const AccessLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const AccessLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 30px 0px 30px;
`;





const Footer = () => {


    return (
        <Container>
            <LinkToTop>Voltar ao início</LinkToTop>

            <AccessContainer>
                <AccessLinkWrapper>
                    <AccessLinkContainer>
                        
                    </AccessLinkContainer>

                    <AccessLinkContainer>
                        
                    </AccessLinkContainer>

                    <AccessLinkContainer>
                        
                    </AccessLinkContainer>
                </AccessLinkWrapper>
            </AccessContainer>
        </Container>
    )
}


export default Footer;