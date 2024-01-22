import React from 'react';
import Button from './components/Button';
import Heading from './components/Heading';

const Home = () => {
  return (
    <div>
      <Heading />
      <Button active/>
      <Button />
      <h1>Welcome to my website</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;