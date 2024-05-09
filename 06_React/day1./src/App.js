import { Component } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [
                { id: 1, charge: '콜라', amount: 2000 },
                { id: 2, charge: '빵', amount: 1000 },
                { id: 3, charge: '맥북', amount: 20000 },
            ],
        };
    }

    handleDelete = (id) => {
        const newExpense = this.state.expenses.filter((expense) => expense.id !== id);

        this.setState({ expenses: newExpense });
        console.log('newExpense', newExpense);
    };

    render() {
        return (
            <main className="main-container">
                <div className="sub-container">
                    <h1>장바구니</h1>

                    <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
                        {/* ExpenseForm */}
                        <ExpenseForm />
                    </div>

                    <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
                        {/* Expense List */}
                        <ExpenseList initialExpenses={this.state.expenses} handleDelete={this.handleDelete} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
                        <p style={{ fontSize: '2rem' }}>총합계:</p>
                    </div>
                </div>
            </main>
        );
    }
}
