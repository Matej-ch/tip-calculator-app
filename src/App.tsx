import './App.scss'
import TipCalculator from "./TipCalculator";
import TipSelector from "./TipSelector";
import logoSvg from './assets/logo.svg'
import React, {useState} from "react";

function App() {

    const [bill, setBill] = useState<number>(142.55);
    const [tipPercent, setTipPercent] = useState(15);
    const [defaultTipIndex, setDefaultTipIndex] = useState(2);

    const handleTipChange = (tip: number): void => {
        setTipPercent(tip);
    }

    const handleBillPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBill(parseFloat(e.target.value))
    }

    const resetValues = (): void => {
        setBill(0);
        setTipPercent(15);
        setDefaultTipIndex(2);
    }

    return (
        <div className="app" role="main">
            <img src={logoSvg} alt={'Splitter logo'} className={'app-logo'}/>
            <TipCalculator bill={bill} tipPercent={tipPercent} handleBillPriceChange={handleBillPriceChange}
                           resetValues={resetValues}>
                <TipSelector options={[5, 10, 15, 25, 50]} defaultTipIndex={defaultTipIndex}
                             handleTipChange={handleTipChange}/>
            </TipCalculator>
        </div>
    )
}

export default App
