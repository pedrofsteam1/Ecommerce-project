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

} from './InitialBanner.styled';

const InitialBanner = () => {

    const [bannerNumber, setBannerNumber] = useState(0);

    const BannerChange = (n) => {
        let pos = bannerNumber + n;
        
        if (pos < 0) {
            setBannerNumber(BannersJson.banners.initial.length - 1);
        }
        else if (pos >= BannersJson.banners.initial.length) {
            setBannerNumber(0);
        }
        else {
            setBannerNumber(pos);
        }
    }

    useEffect(() => {
        
    },[]);

    return(
       <BannerContainer>
            <BannerImageWrapper>
                {BannersJson.banners.initial.map((item, key) => (
                    <BannerImageContainer key={key}>
                        <BannerImage src={item}>
                
                        </BannerImage>
                    </BannerImageContainer>
                ))} 
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