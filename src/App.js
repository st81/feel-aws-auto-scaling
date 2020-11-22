import './App.css';
import Header from './Header'
import ExecuteAb from './ExecuteAb'
import DisplayAutoScalingState from './DisplayAutoScalingState'
import EcsServiceState from './EcsServiceState'
import AutoScalingEcsServiceMetrics from './AutoScalingEcsServiceMetrics'

function App() {
    return (
        <div>
            <Header />
            <DisplayAutoScalingState autoScalingState={'Not started'} />
            <AutoScalingEcsServiceMetrics />
            <EcsServiceState />
            <ExecuteAb />
        </div>
    );
}

export default App;
