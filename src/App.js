import React from 'react'
import './App.css';
import Header from './composantes/Header';
import Questions from './composantes/Questions';

function App() {
    return (
        <div className="allC">
            <Header/>
            <h1 className="setTitle">VOTE YOUR MAN</h1>
            <h2 className="setTitle">On Top</h2>
            <Questions/>
        </div>
    );
}

export default App;
