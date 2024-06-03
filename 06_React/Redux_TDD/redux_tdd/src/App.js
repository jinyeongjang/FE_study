import { useState } from 'react';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="App">
            <div className="app-wrap">
                <h1>Redux TDD 카운터 앱</h1>
                <header className="App-header">
                    <h3 data-testid="counter" className="counter">
                        {counter}
                    </h3>
                    <div className="button-group">
                        <div>
                            <button class="button-count" data-testid="minus-button" onClick={() => setCounter((count) => count - 1)} disabled={disabled}>
                                감소
                            </button>
                            <button class="button-count" data-testid="plus-button" onClick={() => setCounter((count) => count + 1)} disabled={disabled}>
                                증가
                            </button>
                        </div>

                        <div>
                            <button className="off-button" data-testid="on/off-button" onClick={() => setDisabled((prev) => !prev)}>
                                켜기/끄기
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default App;
