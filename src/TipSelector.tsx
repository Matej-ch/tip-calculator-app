import './TipSelector.scss'
import React, {useState} from "react";

type props = {
    defaultTipIndex: number,
    handleTipChange: Function,
    options: number[]
}

function TipSelector({handleTipChange, defaultTipIndex, options}: props) {

    const [selectedTip, setSelectedTip] = useState<number>(defaultTipIndex);
    const [isCustomTip, setIsCustomTip] = useState<boolean>(false);
    const [customTip, setCustomTip] = useState('25');

    const handleBtnClick = (tip: number, index: number): void => {
        setSelectedTip(index);
        setIsCustomTip(false);

        handleTipChange(tip);
    }

    const handleCustomTip = (): void => {
        setSelectedTip(-1);
        setIsCustomTip(true)
    }

    const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCustomTip(e.target.value)
        handleTipChange(e.target.value);
    };

    return (<div className={'tip-selector'}>
        <label htmlFor="">Select tip %</label>
        <div className={'options'}>
            {options.map((tip, index) => {
                return <button onClick={() => handleBtnClick(tip, index)}
                               className={selectedTip === index ? 'selected' : ''}
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