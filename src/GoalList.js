import React from 'react'

function GoalList(props) {
    console.log(props.goals);
    return (
        <div>
        <ul className="goal__list">
            {
                props.goals.map((goal)=> {
                    return <li key={goal.id}>{goal.text}</li>
                })
            }
        </ul>
        </div>
    )
}

export default GoalList
