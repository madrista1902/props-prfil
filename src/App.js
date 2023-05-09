import Profile from './Profile/Profile';
import './App.css';
import img from './Profile/profile.jpg'
function App() {
  const handleName = (name) => alert(`Hello, my name is ${name}`);

  return (
    <div className="App">
      <Profile fullName="Riadh" profession="Full Stack Developer" handleName={handleName}>
        <img src={img} alt="Profile Pic" />
      </Profile>
    </div>
  );
}

export default App;
