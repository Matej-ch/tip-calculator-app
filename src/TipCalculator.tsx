import './TipCalculator.scss'

function TipCalculator({children}: {children? : JSX.Element|JSX.Element[]}) {
    return (<div className={'tip-calculator'}>
        <label htmlFor="">
            Bill
            <input type="text"/>
        </label>

        {children}

        <label htmlFor="">Number of People
            <input type="text"/>
        </label>

        <div className={'final-tip-wrapper'}>
            <div>
                <div>Tip Amount <br/>/ person</div>
                <div>$4.27</div>
            </div>
            <div>
                <div>Total <br/>/ person</div>
                <div>$32.79</div>
            </div>

            <button>Reset</button>
        </div>
    </div>);
}

export default TipCalculator