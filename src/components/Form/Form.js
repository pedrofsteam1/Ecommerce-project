import React from 'react';

import {
    Container,
    FormTitle,
    InputWrapper,
    Label,
    Input,
    Button
} from './Form.styled';

const Form = () => {


    return(
        <Container>
            <FormTitle>Fazer login</FormTitle>

            <InputWrapper>
                <Label htmlFor='email'>E-mail ou número de telefone celular</Label>
                <Input name='email' type={'text'}></Input>
            </InputWrapper>

            <Button bcolor={'rgba(218,165,32,0.7)'} hcolor={'rgba(218,165,32,1)'}>Continuar</Button>

        </Container>
    )
}


export default Form;