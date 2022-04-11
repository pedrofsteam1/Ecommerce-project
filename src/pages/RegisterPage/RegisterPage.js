import React from 'react';

import { Container, MainWrapper } from '../Page.styled';

import {
    RegisterContainer,
    RegisterWrapper
} from './Register.styled';

import {
    Logo,
    FormReg,
    FormFooter
} from '../../components/index.js';

const RegisterPage = () => {


    return (
        <Container color={'white'}>
            <RegisterContainer>
                <RegisterWrapper>
                    <Logo></Logo>

                    <FormReg></FormReg>
                </RegisterWrapper>

                <FormFooter></FormFooter>
            </RegisterContainer>
        </Container>
    )
}


export default RegisterPage;