import React from 'react';
import styles from './BannerCss';
import {isMobile} from '../../util/commonUtils';
const Banner = () => {
    const bMobile = isMobile();
    const titleFontSize = bMobile ? '1.5rem': '2.5rem';
    const descFontSize = bMobile ? '1rem': '2rem';
    return (
        <div style={styles.bannerContainer}>   
          <img style={styles.bannerBackgroundImage} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/cover_pic-770x433.jpeg?Mnf6RcwHx_KJgGAqeVIQxgYj7Lsk5fNW" />
          <div style={styles.textContent}>
            <span style={{...styles.title, fontSize: titleFontSize}}>Did Russia Release 500 Lions To Enforce COVID-19 Lockdown?</span>
            <span style={{...styles.desc, fontSize: descFontSize}}>No, but we don't doubt the effectiveness of such a strategy. </span>
          </div>
        </div>
    );
}

export default Banner;