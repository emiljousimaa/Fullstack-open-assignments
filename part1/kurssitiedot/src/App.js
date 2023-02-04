const Header = (props) => {
  console.log(props)

  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  
  return (
  <>
  <p>{props.coursename} {props.exercises}</p>
  </>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <>
    <Part coursename={props.coursename1} exercises={props.exercises1} />
    <Part coursename={props.coursename2} exercises={props.exercises2} />
    <Part coursename={props.coursename3} exercises={props.exercises3} />
    </>
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <>
    <p>Number of exercises {props.totalExercises}</p>
    </>
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
    <>
    <Header course={course} />
    <Content coursename1={part1} exercises1={exercises1} coursename2={part2}
     exercises2={exercises2} coursename3={part3} exercises3={exercises3}/>
    <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </>
  );
}

export default App;