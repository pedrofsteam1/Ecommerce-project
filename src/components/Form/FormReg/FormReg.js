import React from 'react';

import {
    Container,
    FormTitle,
    InputWrapper,
    Label,
    Input,
    Button,
    LabelWrapper,
    HelpLink
} from '../Form.styled';

const FormReg = () => {


    return(
        <Container>
            <FormTitle>Criar Conta</FormTitle>

            <InputWrapper>
                <Label htmlFor='name'>Seu nome</Label>
                <Input name='name' type={'text'}></Input>
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor='email'>Número de celular ou e-mail</Label>
                <Input name='email' type={'text'}></Input>
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor='password'>Senha</Label>
                <Input name='password' type={'password'}></Input>
                <Label fsize={'11px'}>! As senhas devem ter pelo menos 6 caracteres.</Label>
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor='confirm'>Insira a senha nova mais uma vez</Label>
                <Input name='confirm' type={'password'}></Input>
            </InputWrapper>

            <Button bcolor={'rgba(218,165,32,0.7)'} hcolor={'rgba(218,165,32,1)'}>Continuar</Button>

            <LabelWrapper>
                <Label fsize={'12px'}>Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.</Label>
            </LabelWrapper>

            
            <LabelWrapper pad={'10px 0px 0px 0px'}>
                <Label>Você já tem uma conta?</Label>
                <HelpLink to='/' fsize={'14px'} padleft={'5px'}>Fazer Login ►</HelpLink>
            </LabelWrapper>
        </Container>
    )
}


export default FormReg;