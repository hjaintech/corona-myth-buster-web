import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/CardV2';
import data from '../../assets/data';
import {isMobile} from '../../util/commonUtils';

const Landing = () => {
  const bIsMobile = isMobile();
  const marginHorizonatal = bIsMobile ? 0 : '15%';
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Header />
      <Banner />
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: `0 ${marginHorizonatal} 0 ${marginHorizonatal}`}}>
        {
          data.map((item, index) => (
            <Card
              myth={item.myth}
              truth={item.truth}
              mythBustedBy={item.mythBustedBy}
              link={item.link}
              heading={item.heading}
              index={index + 1}
              key={index}

            />

          ))
        }
      </div>

    </div>
  );
};

export default Landing;