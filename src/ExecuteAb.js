import { useState } from 'react';

function ExecuteAb() {
    const [numberOfRequestsAb, setNumberOfRequestsAb] = useState();
    const [numberOfConcurrencyAb, setNumberOfConcurrencyAb] = useState();

    return (
        <div>
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
    )
}

export default ExecuteAb
