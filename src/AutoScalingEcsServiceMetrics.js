import { useState } from 'react'
import axios from 'axios'
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import './AutoScalingEcsServiceMetrics.css'

const Plot = createPlotlyComponent(Plotly);

const apiServerUrl = require('./config.json').apiServerUrl
const apiServerPort = require('./config.json').apiServerPort
const apiServerPath = `${apiServerUrl}:${apiServerPort}`

function AutoScalingEcsServiceMetrics(props) {
    const [metricData, setMetricData] = useState({
        metricData: [],
        timestamps: [],
    })

    // TODO: startTime should be 1 hour before of current time
    const startTime = new Date("2020-11-22T11:40:00.778Z")

    const data = [
        {
            y: metricData.metricData,
        },
    ]
    const layout = { width: 500, height: 300, title: 'CPU utilization' }

    return (
        <div>
            <div>
                <span className="ecs-service-metrics-title">
                    ECS service metrics:
                </span>
                <button
                    className="ecs-service-metrics-update-button"
                    onClick={() => {
                        setMetricData({
                            metricData: [],
                            timestamps: [],
                        })
                        axios.get(
                            `${apiServerPath}/autoScalingEcsServiceMetrics`, 
                            {
                                params: {
                                    startTime: startTime,
                                    endTime: new Date(),
                                },
                            },
                        )
                        .then(res => {
                            setMetricData(res.data)
                        })
                    }}>
                    Update metrics
                </button>
            </div>
            <Plot
                data={data}
                layout={layout}
            />
        </div>
    )
}

export default AutoScalingEcsServiceMetrics
