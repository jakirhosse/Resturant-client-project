import Banner from '@/components/Homes/Banner/Banner';
import CookMan from '@/components/Homes/CookMan/CookMan';
import Experiences from '@/components/Homes/Experiences/Experiences';
import FreeDaliveriMan from '@/components/Homes/FreeDaliveriMan/FreeDaliveriMan';
import MostPopuler from '@/components/Homes/MostPopuler/MostPopuler';
import Today from '@/components/Homes/Today/Today';
import React from 'react';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Experiences></Experiences>
      <Today></Today>
      <MostPopuler></MostPopuler>
      <CookMan></CookMan>
      <FreeDaliveriMan></FreeDaliveriMan>
    </div>
  );
};
export default Home;
