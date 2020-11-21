import { useState } from 'react'
import axios from 'axios'
import './EcsServiceState.css'
const apiServerUrl = require('./config.json').apiServerUrl
const apiServerPort = require('./config.json').apiServerPort
const apiServerPath = `${apiServerUrl}:${apiServerPort}`

function EcsServiceState(props) {
    const [ecsServiceState, setEcsServiceState] = useState({
        desiredCount: 'Press "Update button" !',
        runningCount: 'Press "Update button" !',
        pendingCount: 'Press "Update button" !',
    })

    return (
        <div className="ecs-service-state">
            <div className="ecs-service-state-header">
                <span className="ecs-service-state-title">
                    ECS service state:
                </span>
                <button
                    onClick={() => {
                        setEcsServiceState({
                            desiredCount: 'Loading...',
                            runningCount: 'Loading...',
                            pendingCount: 'Loading...',
                        })
                        axios.get(`${apiServerPath}/describeAutoScalingEcsService`)
                            .then(res => {
                                setEcsServiceState(res.data)
                            })
                    }}>
                    Update
                </button>
            </div>
            <div className="ecs-service-state-contents">
                <p id="ecs-service-state-desired-count" className="ecs-service-state-desired-count">
                    <span className="ecs-service-state-desired-count-label">
                        Desired count: 
                    </span>
                    {ecsServiceState.desiredCount}
                </p>
                <p id="ecs-service-state-pending-count" className="ecs-service-state-pending-count">
                    <span className="ecs-service-state-pending-count-label">
                        Pending count:
                    </span>
                    {ecsServiceState.pendingCount}
                </p>
                <p id="ecs-service-state-running-count" className="ecs-service-state-running-count">
                    <span className="ecs-service-state-running-count-label">
                        Running count: 
                    </span>
                    {ecsServiceState.runningCount}
                </p>
            </div>
        </div>
    )
}

export default EcsServiceState
