import { useContext } from 'react';
import {ModalContext} from '../../context/Modal.context';
import ArrowAnimation from '../ArrowAnimation';

function TransactionSubmittedAddCoinToMetaMask() {
    const {isOpen, setIsOpen} = useContext(ModalContext)
    return (
    <div className="modal-wrapper">
        <div className="modal-contents">
            <button className="modal-close-btn" onClick={()=> setIsOpen(false)}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1348 1.51071L13.6581 0L7.80337 5.98929L1.94867 0L0.471909 1.51071L6.3266 7.5L0.471909 13.4893L1.94867 15L7.80337 9.01071L13.6581 15L15.1348 13.4893L9.28013 7.5L15.1348 1.51071Z" fill="#7981A9"/>
                </svg>
            </button>
            <ArrowAnimation />
            <p className="modal-label mt-4">Transaction Submitted</p>
            <div className="btn-section">
            <button className="btns outline sm-btn size-13">View progress</button>
            <button className=" btns full-btn mt-3 mid-btn" style ={{width:'214px'}}>Add COIN to MetaMask</button>
            </div>
        </div>
    </div>
    
    );
}

export default TransactionSubmittedAddCoinToMetaMask;
