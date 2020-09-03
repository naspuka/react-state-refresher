import React, { useState } from 'react'

function NewGoal(props) {

    const [enteredInput, setEnteredInput] = useState('')

    const inputHandler = (event) =>{
        setEnteredInput(event.target.value);
    } 

    const addGoalHandler = (event)=> {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: enteredInput
        };
        setEnteredInput('');
        props.onAddGoal(newGoal);

    }
    return (
        <div>
            <form onSubmit={addGoalHandler}> 
                <input value={enteredInput} type='text' onChange={inputHandler}/>
                <button style={{color:'yellowgreen'}} type='submit'>Add goal</button>
            </form>
        </div>
    )
}

export default NewGoal
