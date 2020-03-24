import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import data from '../../assets/data';

const Landing = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Header />
      {
        data.map((item) => (
          <Card
          myth={item.myth}
          truth={item.truth}
      />
          
        ))
      }
    </div>
  );
};

export default Landing;