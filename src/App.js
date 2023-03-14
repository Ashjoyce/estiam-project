import logo from './logo.svg';
import './App.css';
import Navbar from './Components/BarreNavigation';
import Sidebar from './Components/Side';
import Footer from './Components/Footer';
import Main from './Components/Main';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />
      <Main />
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

