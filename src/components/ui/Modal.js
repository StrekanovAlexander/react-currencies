import ActionForm from '../ActionForm'

function Modal(props) {
    const modalContent = () => {
        if (props.state.isLoading) {
            return (
                <img className="img-loading" src="/images/loading.gif" alt="loading" />
            )    
        } else if (props.state.action) {
            return <ActionForm 
                    displayModal={props.displayModal} 
                    action={props.state.action}
                    selectedRate={props.state.selectedRate}
                />
        }
    }
    return (
        <div className="modal">
            <div className="modal__container">
                {modalContent()}
            </div>
        </div>
    )
}

export default Modal