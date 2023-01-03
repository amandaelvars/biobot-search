import './App.css';
import logo from './assets/biobot-logo.png';
import Search from './components/Search/Search.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2 className='header-title'>Biobot Test Kit Search</h2>
        <Search/>
      </header>
    </div>
  );
}

export default App;
