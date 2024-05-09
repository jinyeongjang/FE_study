import React, { Component } from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

export default class ExpenseList extends Component {
    render() {
        return (
            <>
                <ul className="list">
                    {this.props.initialExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} expense={expense} handleDelete={this.props.handleDelete} /> // 각 요소에 key 속성 추가
                    ))}
                </ul>
                <button className="btn">목록 지우기</button>
            </>
        );
    }
}
