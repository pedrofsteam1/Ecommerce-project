import React from "react";

import {
    Container,
    Wrapper,
    Price,
    Inventory,
    QuantityWrapper,
    QtdSelect,
    AddCartButton,
    Transaction,
    Send,
    Sold,
    WarrantyWrapper,
    WarrantyTitle,
    WarrantyOptions,
    WarrantyCheck,
    WarrantyLabel,
    GiftWrapper,
    GiftCheck,
    GiftLabel,
    ListAdd,
} from './AddCart.styled'

const AddCart = ({ prod }) => {


    return(
        <Container>
            <Wrapper>
                <Price>{prod.price}</Price>
                {prod.inventory ? <Inventory>Em estoque</Inventory> : <Inventory color={"red"}>Produto Indisponível</Inventory>}

                <QuantityWrapper>
                    Quantidade: 
                    <QtdSelect>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </QtdSelect>
                </QuantityWrapper>

                <AddCartButton color={"rgb(255,215,0)"}>Adicionar ao carrinho</AddCartButton>
                <AddCartButton color={"rgb(255,140,0)"}>Comprar agora</AddCartButton>

                <Transaction>Transação Segura</Transaction>

                <Send>Enviado por: Loja.com.br</Send>
                <Sold>Vendido por: Loja.com.br</Sold>

                <WarrantyWrapper>
                    <WarrantyTitle>Adicionar um plano de seguro:</WarrantyTitle>

                    <WarrantyOptions>
                        <WarrantyCheck type='checkbox' name='warranty'></WarrantyCheck>
                        <WarrantyLabel htmlFor='warranty'>Garantia estendida de 12 meses contra falhas e defeitos por R$ 172,00</WarrantyLabel>
                    </WarrantyOptions>
                </WarrantyWrapper>

                <GiftWrapper>
                    <GiftCheck type='checkbox' name='gift'></GiftCheck>
                    <GiftLabel htmlFor='gift'>Comprar este item como presente</GiftLabel>
                </GiftWrapper>

                <ListAdd>Adicionar à lista</ListAdd>
            </Wrapper>
        </Container>
    )
}


export default AddCart;