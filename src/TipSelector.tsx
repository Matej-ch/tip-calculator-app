function TipSelector({options}: { options: number[] }) {
    return (<div>
        <label htmlFor="">Select tip %</label>
        {options.map(tip => {
            return <button className={'tip-box'}>{tip}%</button>
        })}

        <button className={'tip-box'}>Custom</button>
    </div>);
}

export default TipSelector;