import React, { useEffect, useState } from 'react';

import {
    Container,
    ImageCol,
    Wrapper,
    ImagePortrait,
    ImageRow,
    ImageRowDisplay,
    DisplayImage
} from './ProductImage.styled'

const ProductImage = ({ prod }) => {

    const [selectedImg, setSelectedImg] = useState(prod.images[0]);

    return(
        <Container>
            <Wrapper>
                <ImageCol>
                    {prod.images.map((item, key) => (
                        <ImageRow tabIndex={1} key={key}>
                            <ImageRowDisplay src={item} onMouseEnter={(e) => setSelectedImg(e.target.src)}></ImageRowDisplay>
                        </ImageRow>
                    ))}
                </ImageCol>

                <ImagePortrait>
                    <DisplayImage src={selectedImg}></DisplayImage>
                </ImagePortrait>
            </Wrapper>
        </Container>
    )
}


export default ProductImage;