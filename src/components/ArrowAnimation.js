import TransactionSubmittedArrowPointer from '../images/TransactionSubmittedArowPointer.svg'
import TransactionSubmittedArrowBody from '../images/TransactionSubmittedArrowBody.svg'
import TransactionSubmittedElipse from '../images/TransactionSubmittedElipse.svg'


function ArrowAnimation() {
  return (
    <div className="transaction-submitted-animation-wrapper">
        <img  className = 'arrow-animation' src={TransactionSubmittedArrowPointer} alt="transaction submited animation" />
        <img  className = 'arrow-animation' src={ TransactionSubmittedArrowBody} alt="transaction submited animation" />
        <img  className = 'elipse-animation' src={TransactionSubmittedElipse} alt="transaction submited animation" />
    </div>

  );
}

export default ArrowAnimation;