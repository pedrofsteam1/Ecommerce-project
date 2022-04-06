import React, { useEffect } from 'react';

import {
    Container,
    Details,
    DetailsLabel,
    DetailsRow,
    DetailsTitle,
    DetailsValue,

} from './ProductInfo.styled';

const ProductInfo = ({ prod }) => {

    useEffect(()=>{
        console.log(prod.chars)
    },[])

    return(
        <Container>
            <DetailsTitle color={'rgb(210,105,30)'} border={'none'}>Informações sobre o produto</DetailsTitle>
            <Details>
                <DetailsTitle>Detalhes técnicos</DetailsTitle>
                {prod.chars.name.map((item, key) =>(
                    <DetailsRow key={key}>
                        <DetailsLabel>{item}</DetailsLabel>
                        <DetailsValue>{prod.chars.value[key]}</DetailsValue>
                    </DetailsRow>
                ))}
            </Details>

            <Details mleft={'auto'}>
                <DetailsTitle>Informações adicionais</DetailsTitle>
                <DetailsRow>                 
                    <DetailsLabel>Marca</DetailsLabel>
                    <DetailsValue>PHILCO</DetailsValue>
                </DetailsRow>
            </Details>
        </Container>
    )
}


export default ProductInfo;