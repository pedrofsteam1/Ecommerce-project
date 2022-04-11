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

const FormLog = () => {


    return(
        <Container>
            <FormTitle>Fazer login</FormTitle>

            <InputWrapper>
                <Label htmlFor='email'>E-mail ou número de telefone celular</Label>
                <Input name='email' type={'text'}></Input>
            </InputWrapper>

            <Button bcolor={'rgba(218,165,32,0.7)'} hcolor={'rgba(218,165,32,1)'}>Continuar</Button>

            <LabelWrapper>
                <Label fsize={'12px'}>Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.</Label>
            </LabelWrapper>

            
            <LabelWrapper pad={'10px 0px 0px 0px'}>
                <HelpLink to='/' fsize={'14px'}>► Precisa de ajuda?</HelpLink>
            </LabelWrapper>
        </Container>
    )
}


export default FormLog;