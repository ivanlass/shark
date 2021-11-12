import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import BottomLines from './components/BottomLines';
import Cylinder from './components/Cylinder';
import MainContent from './components/MainContent';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Cylinder />
      <MainContent />
      <BottomLines />
    </div>

  );
}

export default App;
