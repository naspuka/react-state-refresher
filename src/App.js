import React, { useState } from 'react';
import './App.css';
import GoalList from './GoalList';
import NewGoal from './NewGoal';

function App() {

  const [courseGoals, setCourseGoals] = useState([
    {id: 'c1', text: 'Finish the course'},
    {id: 'c2', text: 'Learn all about the course'},
    {id: 'c3', text: 'Help other students answer questions.'}
  ])


  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevGoals) => {
      return prevGoals.concat(newGoal)
    });
  }
  return (
    <div >
      <div className="App">
      <h2 >Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      </div>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
