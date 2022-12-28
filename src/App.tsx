import './App.scss'
import TipCalculator from "./TipCalculator";
import TipSelector from "./TipSelector";
import logoSvg from './assets/logo.svg'

function App() {

    return (
        <div className="app" role="main">
            <img src={logoSvg} alt={'Splitter logo'} className={'app-logo'}/>
            <TipCalculator>
                <TipSelector options={[5, 10, 15, 25, 50]}/>
            </TipCalculator>
        </div>
    )
}

export default App
