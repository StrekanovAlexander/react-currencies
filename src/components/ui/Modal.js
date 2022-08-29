import ActionForm from '../ActionForm'

function Modal(props) {
    const modalContent = () => {
        if (props.isLoading) {
            return (
                <img className="img-loading" src="/images/loading.gif" alt="loading" />
            )    
        } else if (props.action) {
            return <ActionForm displayModal={props.displayModal} />
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