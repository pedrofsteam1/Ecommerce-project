import React from "react";

import {
    Container,
    Wrapper,
    Price,
    Inventory,
    QuantityWrapper,
    QtdSelect,
    AddCartButton,
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
            </Wrapper>
        </Container>
    )
}


export default AddCart;