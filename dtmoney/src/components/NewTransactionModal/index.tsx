import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

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
                <input placeholder="Category" />
                <button type="submit">Submit</button>
            </Container>
        </Modal>
    )
}