const Header = (props) => {
  console.log(props)

  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  
  return (
  <>
  <p>{props.part.name} {props.part.exercises}</p>
  </>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <>
    <Part part={props.courses[0]} />
    <Part part={props.courses[1]} />
    <Part part={props.courses[2]} />
    </>
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <>
    <p>Number of exercises {props.courses[0].exercises + props.courses[1].exercises
     + props.courses[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
    <Header course={course} />
    <Content courses={course.parts}/>
    <Total courses={course.parts} />
    </>
  );
}




export default App;
