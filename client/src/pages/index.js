import { useState } from 'react';
import axios from 'axios';

function Home() {

    const [state, setState] = useState({
        numbers: "",
        output: ""
    });

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        let numbers = state.numbers.trim().replace(/\s\s+/g, ' ').split(" ");

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
            <form className="mt-5 mb-4" onSubmit={handleSubmit}>
                <label 
                    className="mx-4 my-auto"
                    for="numbers"
                >
                    Number Array:
                </label>
                <input
                    id="numbers"
                    name="numbers"
                    value={state.input}
                    onChange={handleChange}
                />

                <button type="submit">
                    Compute
                </button>
            </form>
            {state.output === "" ? "" : (
                <div className="mt-4">
                    <span className="mr-3">Output:</span>{state.output}
                </div>
            )}
        </div>
    )
}

export default Home;