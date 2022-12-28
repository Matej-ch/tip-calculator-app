import './TipCalculator.scss'
import {useState} from "react";
import dollarSvg from './assets/icon-dollar.svg'
import personSvg from './assets/icon-person.svg'

function TipCalculator({children}: { children?: JSX.Element | JSX.Element[] }) {

    const [bill, setBill] = useState<number>(142.55);
    const [people, setPeople] = useState<number>(5);
    const [tipAmount, setTipAmount] = useState(4.27);
    const [totalTip, setTotalTip] = useState(32.79);

    const handleReset = () => {
        setBill(0)
        setPeople(0)
        setTipAmount(0)
        setTotalTip(0)
    }

    return (<div className={'tip-calculator'}>
        <label htmlFor="bill">Bill</label>
        <div className={'input-wrapper'}>
            <img src={dollarSvg} alt="" width='14'/>
            <input type="text" defaultValue={bill} id='bill'/>
        </div>
        {children}

        <label htmlFor="people">Number of People</label>
        <div className={'input-wrapper'}>
            <img src={personSvg} alt="" width='14'/>
            <input type="text" defaultValue={people} id='people'/>
        </div>


        <div className={'final-tip-wrapper'}>
            <div className={'flex-group'}>
                <h4>Tip Amount <br/><span>/ person</span></h4>
                <div className={'price'}>${tipAmount}</div>
            </div>
            <div className={'flex-group'}>
                <h4>Total <br/><span>/ person</span></h4>
                <div className={'price'}>${totalTip}</div>
            </div>

            <button onClick={handleReset}>Reset</button>
        </div>
    </div>);
}

export default TipCalculator