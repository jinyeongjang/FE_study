import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import ButtonContainer from './ButtonContainer';
import './TodoContainer.css';

function TodoContainer({ theme, toggleTheme }) {
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            // 4.1 데이터베이스의 TodoItem 렌더링
            // - 서버에서 데이터를 가져오는 함수 fetchTodos를 작성합니다.
            try {
                // - axios를 사용하여 서버의 /api/todos 엔드포인트에서 데이터를 가져옵니다.
                const response = await axios.get('http://localhost:8080/api/todos');
                // - 데이터를 성공적으로 가져오면 setTodos를 호출하여 상태를 업데이트합니다.
                setTodos(response.data);
                // - 데이터를 가져오는 동안 또는 실패 시 오류를 콘솔에 기록합니다.
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };
        // - 데이터를 가져오는 동안 또는 실패 시 오류를 콘솔에 기록합니다.
        fetchTodos();
    }, []);

    const createTodo = async () => {
        // 4.2 새로운 TodoItem 생성
        // - axios를 사용하여 서버의 /api/todos 엔드포인트에 POST 요청을 보냅니다.
        try {
            await axios.post('http://localhost:8080/api/todos', {
                // - 요청 본문에는 새로운 TodoItem의 제목과 초기 완료 상태를 포함합니다.
                title: '새로운 할일',
                completed: false,
            });
            // - 새로운 TodoItem이 성공적으로 생성되면 서버에서 모든 TodoItem을 다시 가져와 상태를 업데이트합니다.
            const response = await axios.get('http://localhost:8080/api/todos');
            setTodos(response.data);
            // - 요청 중 오류가 발생하면 이를 콘솔에 기록합니다.
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    return (
        <div className="todo-app-container">
            <ButtonContainer createTodo={createTodo} theme={theme} toggleTheme={toggleTheme} />
            <div className="todo-list">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        setTodos={setTodos}
                        editingTodo={editingTodo}
                        setEditingTodo={setEditingTodo}
                        newTitle={newTitle}
                        setNewTitle={setNewTitle}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoContainer;
