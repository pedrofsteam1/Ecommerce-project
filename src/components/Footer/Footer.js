import React from "react";

import {
    Container,
    LinkToTop,
    AccessContainer,
    AccessWrapper,
    AccessDivision,
    AccessItem,
    AccessLink,
    AccessName,
    AcceptPaymentWrapper,
    AcceptPayment,
    PaymentForms
} from './Footer.styled';


const Footer = () => {


    return (
        <Container>
            <LinkToTop onClick={() => window.scrollTo(0, 0)}>Voltar ao início</LinkToTop>

            <AccessContainer>
                <AccessWrapper>
                    <AccessDivision>
                        <AccessName>Institucional</AccessName>
                        <AccessItem>
                            <AccessLink to='/'>Quem somos</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Trabalhe conosco</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Assessoria de imprensa</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Parceiros</AccessLink>
                        </AccessItem>
                    </AccessDivision>

                    <AccessDivision>
                        <AccessName>Marketplace</AccessName>
                        <AccessItem>
                            <AccessLink to='/'>Seja um associado</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Venda conosco</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Anuncie seus produtos</AccessLink>
                        </AccessItem>
                    </AccessDivision>

                    <AccessDivision>
                        <AccessName>Deixe-nos ajudar você</AccessName>
                        <AccessItem>
                            <AccessLink to='/'>Central de atendimento</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Frete e prazo de entrega</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Devoluções e reembolsos</AccessLink>
                        </AccessItem>
                        <AccessItem>
                            <AccessLink to='/'>Sua conta</AccessLink>
                        </AccessItem>
                    </AccessDivision>
                </AccessWrapper>

                <AcceptPaymentWrapper>
                    <AcceptPayment style={{fontWeight: '700'}}>Formas de Pagamento</AcceptPayment>
                    <AcceptPayment>
                        <PaymentForms to={'/'}>Cartões de crédito</PaymentForms>
                        <PaymentForms to={'/'}>Cartões de débito</PaymentForms>
                        <PaymentForms to={'/'}>Boleto</PaymentForms>
                        <PaymentForms to={'/'}>Pix</PaymentForms>
                    </AcceptPayment>
                </AcceptPaymentWrapper>
            </AccessContainer>
        </Container>
    )
}


export default Footer;