import './DisplayAbResults.css'

function DisplayAbResults(props) {
    return (
        <div>
            {props.isFinish ?
                <textarea
                    className="display-ab-results"
                    value={props.abResults}
                    rows="50"
                    cols="90">
                </textarea>
                : 
                <p>Type number of requests and concurrency then press Run!</p>}
        </div>
    )
}

export default DisplayAbResults
