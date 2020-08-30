import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
      <h1>{props.course}</h1>
  )
}

const Course = (props) => {
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.sum}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (

    <div>
      <Header course={course}/>
      <Course part={part1} exercise={exercises1} />
      <Course part={part2} exercise={exercises2} />
      <Course part={part3} exercise={exercises3} />
      <Total sum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
