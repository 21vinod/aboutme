import './App.css';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <header style={{marginBottom: '2rem'}}>
        <img src={require('./images/profile.jpg')} alt="Vinod Kumar Mittapally" style={{width: 120, borderRadius: '50%', margin: '1rem auto', display: 'block'}} />
        <h1>Vinod Kumar Mittapally</h1>
        <h3>Senior QA Engineer</h3>
      </header>
      <Resume/>
    </div>
  );
}

export default App;
