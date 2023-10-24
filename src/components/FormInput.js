import { useState } from "react";

function FormInput(props) {
    const [userInput, setUserInput] = useState({
        currentSavings: 0,
        yearlyContribution: 0,
        expectedReturn: 0,
        duration: 0,
    });

    function changeHandler(event) {
        const { name, value } = event.target;

        setUserInput((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    function cancelHandler() {
        setUserInput({
            currentSavings: 0,
            yearlyContribution: 0,
            expectedReturn: 0,
            duration: 0,
        });

        props.onSubmit(userInput);
    }

    function submitHandler(event) {
        event.preventDefault();

        props.onSubmit(userInput);
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        name="currentSavings"
                        type="number"
                        id="current-savings"
                        value={userInput.currentSavings}
                        onChange={changeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        name="yearlyContribution"
                        type="number"
                        id="yearly-contribution"
                        value={userInput.yearlyContribution}
                        onChange={changeHandler}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        name="expectedReturn"
                        type="number"
                        id="expected-return"
                        value={userInput.expectedReturn}
                        onChange={changeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        name="duration"
                        type="number"
                        id="duration"
                        value={userInput.duration}
                        onChange={changeHandler}
                    />
                </p>
            </div>
            <p className="actions">
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={cancelHandler}
                >
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default FormInput;
