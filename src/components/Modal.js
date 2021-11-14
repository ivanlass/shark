import { useContext } from "react";
import CancelOrder from "./modals/CancelOrder";
import TransactionSubmitted from "./modals/TransactionSubmitted";
import WaitingForConfirmation from "./modals/WaitingForConfirmation";
import WithdrawOrder from "./modals/WithdrawOrder";
import {ModalContext} from '../context/Modal.context'
import ConfirmOrder from "./modals/ConfirmOrder";
import SelectToken from "./modals/SelectToken";
import Reject from "./modals/Reject";


function Modal() {
  const {isOpen, setIsOpen, whichModalToOpen} = useContext(ModalContext)


  const close = () => {
    setIsOpen(false)
  }
  console.log(whichModalToOpen)

  return (
    <>
    <div className="modal-container" onClick={close}>
    </div>
      {whichModalToOpen === "WithdrawOrder" && <WithdrawOrder />}
     {whichModalToOpen === "WaitingForConfirmation" && <WaitingForConfirmation />}
      {whichModalToOpen === "ConfirmOrder" && <ConfirmOrder />}
      {whichModalToOpen === "SelectToken" && <SelectToken />}
      {whichModalToOpen === "CancelOrder" && <CancelOrder />}
      {whichModalToOpen === "TransactionSubmitted" && <TransactionSubmitted />}
      {whichModalToOpen === "Rejected" && <Reject />}
</>
  );
}

export default Modal;
