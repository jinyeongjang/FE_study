// import { useState } from 'react'

import './App.css';
import Gallery from './components/Gallery';

function App() {
    return (
        <div className="App">
            <h1>unsplash 갤러리 📷</h1>
            <p>원하는 이미지를 검색하세요.</p>
            <Gallery />
        </div>
    );
}

export default App;
