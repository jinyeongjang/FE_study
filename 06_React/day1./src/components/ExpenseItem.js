import React, { Component } from 'react';
import './ExpenseItem.css';
import { MdDelete, MdEdit } from 'react-icons/md';

export default class ExpenseItem extends Component {
    render() {
        return (
            <li className="item">
                <div className="info">
                    <span className="expense">{this.props.expense.charge}</span>
                    <span className="amount">{this.props.expense.amount}</span>
                </div>
                <div>
                    <button className="edit-btn">
                        <MdEdit />
                    </button>
                    <button onClick={() => this.props.handleDelete(this.props.expense.id)} className="clear-btn">
                        <MdDelete />
                    </button>
                </div>
            </li>
        );
    }
}
