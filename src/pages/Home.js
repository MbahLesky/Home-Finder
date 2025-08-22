import React from 'react';
import './Home.css';
import HomeHeader from '../components/HomeHeader';
import HomeSearch from '../components/HomeSearch';
import HomeList from '../components/HomeList';

function Home() {
  return (
    <div className="home-container">
      <HomeHeader />
      <HomeSearch />
      <HomeList />
    </div>
  );
}

export default Home;
