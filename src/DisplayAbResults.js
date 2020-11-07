import './DisplayAbResults.css'

function DisplayAbResults(props) {
    return (
        <div>
            {<textarea
                className="display-ab-results"
                value={props.abResults}
                readOnly
                rows="50"
                cols="90">
            </textarea>}
        </div>
    )
}

export default DisplayAbResults
