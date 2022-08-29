import ControlPanel from './ControlPanel'

function Main(props) {
    return(
        <main>
            <ControlPanel 
                state={props.state} 
                selectRate={props.selectRate}
                displayModal={props.displayModal} 
            />
        </main>
    )
}

export default Main