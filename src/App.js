import './App.css';
import React, { useState } from 'react';
import Header from './Header'

function App() {
    // Declare a new state variable, which we'll call"count"
    const [numberOfRequestsAb, setNumberOfRequestsAb] = useState();
    const [numberOfConcurrencyAb, setNumberOfConcurrencyAb] = useState();

    return (
        <div>
            <Header />
            <input 
                className="number-of-request-ab"
                type="text"
                placeholder="number of request"
                value={numberOfRequestsAb}
                onChange={(e) => setNumberOfRequestsAb(e.target.value)}
            />
            <input 
                className="number-of-concurrency-ab"
                type="text"
                placeholder="number of concurrency"
                value={numberOfConcurrencyAb}
                onChange={(e) => setNumberOfConcurrencyAb(e.target.value)}
            />
            <button onClick={() => alert('http://localhost:5000/ab')}>
                Run!
            </button>
        </div>
    );
}

export default App;
