import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    const { transactions } = useTransactions();
    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US',
                        {
                            style: 'currency',
                            currency: 'USD'
                        }
                    ).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outComeImg} alt="Outcome" />
                </header>
                <strong>
                {new Intl.NumberFormat('en-US',
                        {
                            style: 'currency',
                            currency: 'USD'
                        }
                    ).format(summary.withdraw)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('en-US',
                        {
                            style: 'currency',
                            currency: 'USD'
                        }
                    ).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}