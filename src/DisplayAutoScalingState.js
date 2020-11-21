import './DisplayAutoScalingState.css'

function DisplayAutoScalingState(props) {
    return (
        <div>
            <p className="auto-scaling-state">Auto scaling state: {props.autoScalingState}</p>
        </div>
    )
}

export default DisplayAutoScalingState
