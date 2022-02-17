import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>$2.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outComeImg} alt="Outcome" />
                </header>
                <strong>$1.000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>$2.000,00</strong>
            </div>
        </Container>
    )
}