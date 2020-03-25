import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from '../../assets/data';

const Landing = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Header />
      <Banner />
      {
        data.map((item, index) => (
          <Card
          myth={item.myth}
          truth={item.truth}
          mythBustedBy={item.mythBustedBy}
          link={item.link}
          index={index + 1}
          key={index}
      />
          
        ))
      }
    </div>
  );
};

export default Landing;