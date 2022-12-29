import './TipCalculator.scss'
import React, {ChangeEventHandler, useState} from "react";
import dollarSvg from './assets/icon-dollar.svg'
import personSvg from './assets/icon-person.svg'

type props = {
    bill: number,
    tipPercent: number,
    handleBillPriceChange: ChangeEventHandler<HTMLInputElement>,
    resetValues: Function,
    children?: JSX.Element | JSX.Element[]
}

function TipCalculator({bill, tipPercent, handleBillPriceChange, resetValues, children}: props) {


    const [people, setPeople] = useState<number>(5);

    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPeople(parseInt(e.target.value));
    }

    const handleReset = (): void => {
        setPeople(5);
        resetValues();
    }

    return (<div className={'tip-calculator'}>
        <label htmlFor="bill">Bill</label>
        <div className={'input-wrapper'}>
            <img src={dollarSvg} alt="" width='14'/>
            <input type="number" step='0.01' min='0' value={bill} id='bill' onChange={handleBillPriceChange}/>
        </div>
        {children}

        <label htmlFor="people">Number of People</label>
        <div className={people <= 0 ? 'input-wrapper zero-people' : 'input-wrapper'}>
            <img src={personSvg} alt="" width='14'/>
            <input type="number" step='1' min='0' value={people} id='people' onChange={handlePeopleChange}/>
        </div>


        <div className={'final-tip-wrapper'}>
            <div className={'flex-group'}>
                <h4>Tip Amount <br/><span>/ person</span></h4>
                <div className={'price'}>${(((bill / people) / 100) * tipPercent).toFixed(2)}</div>
            </div>
            <div className={'flex-group'}>
                <h4>Total <br/><span>/ person</span></h4>
                <div className={'price'}>${((bill / people) + ((bill / people) / 100) * tipPercent).toFixed(2)}</div>
            </div>

            <button onClick={handleReset}>Reset</button>
        </div>
    </div>);
}

export default TipCalculator