import { useContext } from 'react';
import './App.css';
import Navigation from './components/Navbar';
import BottomLines from './components/BottomLines';
import MainContent from './components/MainContent';
import Modal from './components/Modal'
import {ModalContext} from './context/Modal.context'

function App() {
    const {isOpen, setIsOpen} = useContext(ModalContext)

    const openone = () => {
        setIsOpen(true)
    }
  return (
    <div className="App">
      <Navigation />
      <button onClick={openone}>first modal</button>
      <MainContent />
      <BottomLines />
      {isOpen && <Modal />}

    </div>

  );
}

export default App;
