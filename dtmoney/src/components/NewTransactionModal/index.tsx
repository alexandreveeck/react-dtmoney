import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean,
    handleCloseNewTransactionModal: () => void,
}

export function NewTransactionModal({ isNewTransactionModalOpen, handleCloseNewTransactionModal } : NewTransactionModalProps) {

    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            <button type="button" 
            onClick={handleCloseNewTransactionModal} 
            className="react-modal-close">
                <img src={closeImg} alt="Close modal" />
            </button>

            <Container>
                <h2>Register transaction</h2>

                <input placeholder="Title" />
                <input placeholder="Value" />
                
                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="income"/>
                        <span>Income</span>
                    </button>
                    <button type="button">
                        <img src={outcomeImg} alt="outcome"/>
                        <span>Outcome</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder="Category" />
                <button type="submit">Submit</button>
            </Container>
        </Modal>
    )
}