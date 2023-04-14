import React from 'react';
import Profile from './Profile/Profile';
import image from './Profile/profile.jpg';

const handleName = (name) => alert(`Profile user's name is ${name}`);

const App = () => {
  return (
    <div className="container">
      <Profile fullName="Riadh Argoubi" bio="Welcome to my profil" profession="FUll Stock JS" handleName={handleName}>
        <img src={image} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
      </Profile>
    </div>
  );
};

export default App;

