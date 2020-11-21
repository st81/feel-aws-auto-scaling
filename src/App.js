import './App.css';
import Header from './Header'
import ExecuteAb from './ExecuteAb'
import DisplayAutoScalingState from './DisplayAutoScalingState'
import EcsServiceState from './EcsServiceState'
import EcsServiceMetrics from './EcsServiceMetrics'

function App() {
    return (
        <div>
            <Header />
            <DisplayAutoScalingState autoScalingState={'Not started'} />
            <EcsServiceMetrics />
            <EcsServiceState />
            <ExecuteAb />
        </div>
    );
}

export default App;
