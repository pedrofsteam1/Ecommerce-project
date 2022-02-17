import React, { useEffect, useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import BannersJson from '../../services/store/Banners.json';

import { 
    Arrow,
    ArrowsWrapper,
    BannerContainer, 
    BannerImage,
    BannerImageWrapper,
    BannerImageContainer, 
    BannerWrapper,
    BannerImageList,
} from './InitialBanner.styled';

const InitialBanner = () => {

    const [bannerNumber, setBannerNumber] = useState(0);
    const [toMove, setToMove] = useState('translateX(0%)');


    const BannerChange = (n) => {
        let index = bannerNumber + n;

        if (index >= BannersJson.banners.initial.length) {
            index = 0;
        }
        else if (index < 0) {
            index = BannersJson.banners.initial.length - 1;
        }

        const pos = `translateX(-${index * 100}%)`;

        setToMove(pos);

        setBannerNumber(index);
    }

    useEffect(() => {
        
    },[]);

    return(
       <BannerContainer id={'bannerScroll'}>
            <BannerImageWrapper>
                <BannerImageList move={toMove}>
                    {BannersJson.banners.initial.map((item, key) => (
                        <BannerImageContainer key={key}>
                            <BannerImage src={item}>
                    
                            </BannerImage>
                        </BannerImageContainer>
                    ))}
                </BannerImageList>
            </BannerImageWrapper>
           <BannerWrapper>
                <ArrowsWrapper>
                        <Arrow tabIndex={1} left={'0px'} onClick={() => BannerChange(-1)}>
                            <ArrowBackIosIcon style={{fontSize: 40}}></ArrowBackIosIcon>
                        </Arrow>
                        <Arrow tabIndex={1} left={'auto'} onClick={() => BannerChange(1)}>
                            <ArrowForwardIosIcon style={{fontSize: 40}}></ArrowForwardIosIcon>
                        </Arrow>
                </ArrowsWrapper>
            </BannerWrapper>
       </BannerContainer>
    )
}


export default InitialBanner;