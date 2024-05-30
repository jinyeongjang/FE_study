import { useDispatch, useSelector } from 'react-redux';
import { increment, asyncIncrement } from './redux/actions';
import './App.css';

// Dispatch 적용.
function App() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+ 1</button>
            <button onClick={() => dispatch(asyncIncrement())}>1초 후 증가</button>
        </div>
    );
}

export default App;
