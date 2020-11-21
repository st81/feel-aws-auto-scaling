// import Plot from 'react-plotly.js';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

function EcsServiceMetrics(props) {
    const data = [
        {
            x: [1, 2, 3],
            y: [2, 6, 3],
        },
    ]
    const layout = { width: 320, height: 240, title: 'A Fancy Plot' }
    return (
        <div>
            <p>ECS service metrics</p>
            <div id="ecs-service-metrics-plot"></div>
            <Plot
                data={data}
                layout={layout}
            />
        </div>
    )
}

export default EcsServiceMetrics
