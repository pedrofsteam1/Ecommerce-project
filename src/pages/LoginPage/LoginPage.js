import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, MainWrapper } from '../Page.styled';
import { 
    LoginContainer, 
    LoginWrapper,
    CreateAccWrapper,
    CreateAccTitle,
    CreateAccButton,
} from './LoginPage.styled';

import {
    Logo,
    FormLog,
    FormFooter
} from '../../components/index.js';

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <Container color={'white'}>
            <LoginContainer>
                <LoginWrapper>
                    <Logo></Logo>

                    <FormLog></FormLog>

                    <CreateAccWrapper>
                        <CreateAccTitle>Novo na Amazon?</CreateAccTitle>
                        <CreateAccButton onClick={() => navigate('/register', {replace: true})}>Criar sua conta da Amazon</CreateAccButton>
                    </CreateAccWrapper>

                </LoginWrapper>

                <FormFooter></FormFooter>
            </LoginContainer>
        </Container>
    )
}


export default LoginPage;