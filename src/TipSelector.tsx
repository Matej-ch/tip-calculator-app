import './TipSelector.scss'
import React, {useState} from "react";

function TipSelector({options}: { options: number[] }) {

    const [selectedTip, setSelectedTip] = useState<number>(-1);
    const [isCustomTip, setIsCustomTip] = useState<boolean>(false);
    const [customTip, setCustomTip] = useState('25');

    const handleBtnClick = (index: number): void => {
        setSelectedTip(index);
        setIsCustomTip(false);
    }

    const handleCustomTip = (): void => {
        setSelectedTip(-1);
        setIsCustomTip(true)
    }

    const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>): void => setCustomTip(e.target.value);

    return (<div className={'tip-selector'}>
        <label htmlFor="">Select tip %</label>
        <div className={'options'}>
            {options.map((tip, index) => {
                return <button onClick={() => handleBtnClick(index)} className={selectedTip === index ? 'selected' : ''}
                               key={index}>
                    {tip}%
                </button>
            })}

            {isCustomTip ?
                <input className={'custom-tip'} type="text" value={customTip} onChange={handleCustomTipChange}/> :
                <button onClick={() => handleCustomTip()} className={'custom-tip'}>Custom</button>}
        </div>

    </div>);
}

export default TipSelector;