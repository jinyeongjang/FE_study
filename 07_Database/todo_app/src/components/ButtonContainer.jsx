import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = ({ createTodo }) => {
    return (
        <div className="button-container">
            <button onClick={createTodo}>Todo 생성하기</button>
        </div>
    );
};

export default ButtonContainer;
