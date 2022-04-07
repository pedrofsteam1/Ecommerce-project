import React from 'react';

import { Container, MainWrapper } from '../Page.styled';
import { LoginContainer, LoginWrapper } from './LoginPage.styled';
import {
    Logo,
    Form
} from '../../components/index.js';

const LoginPage = () => {


    return (
        <Container color={'white'}>
            <LoginContainer>
                <LoginWrapper>
                    <Logo></Logo>

                    <Form></Form>
                </LoginWrapper>
            </LoginContainer>
        </Container>
    )
}


export default LoginPage;