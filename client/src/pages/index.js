import { useState } from 'react';
import axios from 'axios';

function Home() {

    const [state, setState] = useState({
        numbers: "",
        output: ""
    });

    function handleChange(event) {
        let value = event.target.value.replace(/[^0-9\s]+/g, "");
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        let numbers = state.numbers;

        axios
            .post(`${window.location.origin.toString()}/api/gcd`, { numbers })
            .then((res) => {
                setState({
                    ...state,
                    output: res.data.gcd
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return(
        <div className="col-8 my-5 mx-auto text-center">
            <div className="display-4 my-4">
                Greatest Common Divisor for Array Calculator
            </div>
            <div className="mt-5 mb-4">
                <form className="h5" onSubmit={handleSubmit}>
                    <label 
                        className="mx-4 my-auto"
                        for="numbers"
                    >
                        Number Array:
                    </label>
                    <input
                        className="p-2"
                        id="numbers"
                        name="numbers"
                        value={state.numbers}
                        onChange={handleChange}
                    />

                    <button className="px-3 py-2" type="submit">
                        Compute
                    </button>
                </form>
                <div className="mt-1">
                    <span className="font-weight-bold">Hint:</span> the number should be input with space to separate each number.
                    <br />For example, "20 10 40 60" without the quotation marks would be a valid input. 
                </div>
            </div>
            {state.output === "" ? "" : (
                <div className="mt-4">
                    <span className="mr-3">Output:</span>{state.output}
                </div>
            )}
        </div>
    )
}

export default Home;