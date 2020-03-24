import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';

const Landing = () => {
  const [mythData, setMythData] = useState([]);
  useEffect(() => {
    fetchAndSetData();
  }, []);

  const fetchAndSetData = async () => {
    const response = await fetch('http://demo6902092.mockable.io/coronamythbuster/');
    const data = await response.json();
    setMythData(data.data);
  }
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Header />
      {
        mythData.map((item) => (
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