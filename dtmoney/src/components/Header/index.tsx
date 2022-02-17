import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeadProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal } : HeadProps) {

    function handleOpenNewTransactionModal() {
        onOpenNewTransactionModal();
    }
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button
                    type="button"
                    onClick={handleOpenNewTransactionModal}>New transaction
                </button>
            </Content>
        </Container>
    )
}