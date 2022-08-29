function ActionForm(props) {
    return (
        <div className="action">
            <form>
                <h1>Action Form</h1>
                <div className="action__btns">
                    <button onClick={() => console.log('Run')}>Run</button> 
                    <button onClick={() => props.displayModal(false, '')}>Close</button> 
                </div>
            </form>
        </div>    
    )
}

export default ActionForm