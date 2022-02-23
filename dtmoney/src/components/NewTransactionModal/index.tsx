import { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';


interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean,
    handleCloseNewTransactionModal: () => void,
}

export function NewTransactionModal({ isNewTransactionModalOpen, handleCloseNewTransactionModal } : NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handlerSubmitNewTransaction(event : FormEvent) {
        event.preventDefault();

        await createTransaction({
            title: title,
            amount: amount,
            type: type,
            category: category,
        });
        
        setTitle('');
        setAmount(0);
        setType('withdraw');
        setCategory('');
        
        handleCloseNewTransactionModal();
    }

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

            <Container onSubmit={ handlerSubmitNewTransaction }>
                <h2>Register transaction</h2>

                <input 
                    placeholder="Title" 
                    value={title}
                    onChange={event => { setTitle(event.target.value) }}
                />
                <input 
                    placeholder="Value" 
                    value={amount}
                    onChange={event => { setAmount(Number(event.target.value)) }}
                />
                
                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type ==='deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="income"/>
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type ==='withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="outcome"/>
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder="Category" 
                    value={category}
                    onChange={event => { setCategory(event.target.value) }}
                />
                <button type="submit">Submit</button>
            </Container>
        </Modal>
    )
}