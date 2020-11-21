import './App.css';
import Header from './Header'
import ExecuteAb from './ExecuteAb'
import DisplayAutoScalingState from './DisplayAutoScalingState'

function App() {
    return (
        <div>
            <Header />
            <DisplayAutoScalingState autoScalingState={'Not started'} />
            <ExecuteAb />
        </div>
    );
}

export default App;
