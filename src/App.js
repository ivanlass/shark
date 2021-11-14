import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WholeApp from './WholeApp'
import { ModalProvider } from "./context/Modal.context";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <WholeApp />
      </ModalProvider>
    </div>

  );
}

export default App;
