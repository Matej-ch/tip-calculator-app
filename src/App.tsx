import './App.scss'
import TipCalculator from "./TipCalculator";
import TipSelector from "./TipSelector";

function App() {

    return (
        <div className="app" role="main">
            <h1 className={'app-name'}>Spli <br/> tter</h1>
            <TipCalculator >
                <TipSelector options={[5,10,15,25,50]} />
            </TipCalculator>
        </div>
    )
}

export default App
