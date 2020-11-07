import { useState } from 'react';
import DisplayAbResults from './DisplayAbResults'
import axios from 'axios';
const apiServerUrl = require('./config.json').apiServerUrl
const apiServerPort = require('./config.json').apiServerPort
const autoScalingServerUrl = require('./config.json').autoScalingServerUrl
const autoScalingServerPort = require('./config.json').autoScalingServerPort

function ExecuteAb() {
    const [numberOfRequestsAb, setNumberOfRequestsAb] = useState('');
    const [numberOfConcurrencyAb, setNumberOfConcurrencyAb] = useState('');
    const [abResults, setAbResults] = useState('Type number of requests and concurrency then press Run!')

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
            <button
                onClick={() => {
                    setAbResults('Running...')
                    let req = {
                        requests: numberOfRequestsAb,
                        concurrency: numberOfConcurrencyAb,
                        serverUrl: `${autoScalingServerUrl}:${autoScalingServerPort}/`,
                    }

                    axios.post(`${apiServerUrl}:${apiServerPort}/ab`, req)
                        .then(res => {
                            setAbResults(res.data)
                            })
                        .catch(e => alert(e))
                }}>
                Run!
            </button>

            
            <DisplayAbResults
                abResults={abResults}
            />
        </div>
    )
}

export default ExecuteAb
