const Calculator = () => {
    return (
        <section>
            <div className="container">
                <div className="text-wrapper">
                    <h2>How Much Do You Qualify For?</h2>
                    <p>One of the first steps to determining your budget is to find how how big of a loan you qualify for based on your debt-to-income ratio (DTI).</p>
                    <p>Most loans limit your monthly debt (including a new loan) to no more than 50% of your monthly income. Calculate your income and debt and find out how much loan you qualify for.</p>
                </div>
                <div className="form-wrapper">
                    <div>
                        <h3>Income</h3>
                        <div className="flex gap-5">
                            <div className="input-wrapper flex-1/3">
                                <label className="block">Monthly Employment Income</label>
                                <input type="text" className="border-1 w-full" />
                            </div>
                            <div className="input-wrapper flex-1/3">
                                <label className="block">Monthly Employment Income</label>
                                <input type="text" className="border-1 w-full" />
                            </div>
                            <div className="input-wrapper flex-1/3">
                                <label className="block">Monthly Employment Income</label>
                                <input type="text" className="border-1 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;