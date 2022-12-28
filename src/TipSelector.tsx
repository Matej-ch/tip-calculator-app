import './TipSelector.scss'

function TipSelector({options}: { options: number[] }) {



    return (<div className={'tip-selector'}>
        <label htmlFor="">Select tip %</label>
        <div className={'options'}>
            {options.map((tip, index) => {
                return <button className={'tip-box'} key={index}>{tip}%</button>
            })}

            <button className={'tip-box'}>Custom</button>
        </div>

    </div>);
}

export default TipSelector;