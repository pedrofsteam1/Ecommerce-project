import React, { useEffect, useState } from 'react';


import {
    CardContainer,
    Inside,
    Title,
    End,
    AdsContainer,
    Ads,
    AdsImg,
    AdsImgWrapper,
    AdsDesc,
    Desc
} from './Card.styled';

const Card = ({ Info, Single, w, h }) => {

    const [adsStore, setAdsStore] = useState([]);
    const [adsItem, setAdsItem] = useState(0);

    useEffect(() => {
        
        if (!Single) {
            let numbers = [];

            while(numbers.length < 4) {
                let rd = Math.floor(Math.random() * Info.card.ads.length);

                if (numbers.includes(rd) === false) {
                    numbers.push(rd);
                }   

            }

            setAdsStore(numbers)
        }

    },[Info, Single]);

    return (
        <CardContainer>
            {Single ?  
                <Inside>
                    <Title>{Info.card.title}</Title>
                    <AdsContainer>
                        <Ads wid={w} hei={h}>
                            <AdsImgWrapper>
                                <AdsImg src={Info.card.ads[adsItem].image}></AdsImg>
                            </AdsImgWrapper>
                            <AdsDesc>
                                <Desc>{Info.card.ads[adsItem].text}</Desc>
                                <Desc>{Info.card.ads[adsItem].price}</Desc>
                            </AdsDesc>
                        </Ads>
                    </AdsContainer>
                    <End>{Info.card.end}</End>
                </Inside>
                :
                <Inside>
                    <Title>{Info.card.title}</Title>
                    <AdsContainer>
                        {adsStore.map((item, key) => (
                            <Ads wid={w} hei={h} key={key}>
                                <AdsImgWrapper>
                                    <AdsImg src={Info.card.ads[item].image}></AdsImg>
                                </AdsImgWrapper>
                                <AdsDesc>
                                    <Desc>{Info.card.ads[item].text}</Desc>
                                    <Desc>{Info.card.ads[item].price}</Desc>
                                </AdsDesc>
                            </Ads>
                        ))}
                    </AdsContainer>
                    <End>{Info.card.end}</End>  
                </Inside>
            } 
        </CardContainer>
    )
}


export default Card;