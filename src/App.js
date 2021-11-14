import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WholeApp from './WholeApp'
import { ModalProvider } from "./context/Modal.context";
import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'

function App() {

  return (
    <div className="App">

      <DAppProvider>
      <ModalProvider>
        <WholeApp />
      </ModalProvider>
      </DAppProvider>
    </div>

  );
}

export default App;
