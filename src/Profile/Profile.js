import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const style = {
    color: 'blue',
    fontSize: '24px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  };
 

  return (
    <div>
      <h1 style={style}>{fullName}</h1>
      <h2>{profession}</h2>
      <p>{bio}</p>
      <div>{children}</div>
      <button onClick={() => handleName(fullName)}>Click Here!</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  bio: 'welcome to my profile',
};

export default Profile;
