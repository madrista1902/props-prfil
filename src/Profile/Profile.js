import React from 'react';


const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      margin: '1rem'
    }}>
      {children}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>
        Show Name
      </button>
    </div>
  );
};


export default Profile;
