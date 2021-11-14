import { useContext } from "react";
import CancelOrder from "./CancelOrder";
import TransactionSubmitted from "./TransactionSubmitted";
import WaitingForConfirmation from "./WaitingForConfirmation";
import WithdrawOrder from "./WithdrawOrder";
import {ModalContext} from '../context/Modal.context'


function Modal() {
  const {isOpen, setIsOpen} = useContext(ModalContext)


  const close = () => {
    setIsOpen(false)
  }

  return (
    <>
    <div className="modal-container" onClick={close}>
    </div>
      {/* <WithdrawOrder /> */}
      {/* <WaitingForConfirmation /> */}
      <CancelOrder />
      {/* <TransactionSubmitted /> */}
</>
  );
}

export default Modal;
