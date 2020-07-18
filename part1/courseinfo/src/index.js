import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => { 
  return (<h1>{props.course}</h1>)
};

const Part = props => {
  return (<p>{props.part} {props.exercises}</p>)
};
 
const Content = (props) => {
    return (
        <div>
            <Part part={props.content.part[0].name} exercises={props.content.part[0].exercises} />
            <Part part={props.content.part[1].name} exercises={props.content.part[1].exercises} />
            <Part part={props.content.part[2].name} exercises={props.content.part[2].exercises} />
        </div>
    )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.content.part[0].exercises+props.content.part[1].exercises+props.content.part[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const content = {
    part: [
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
    <div>
      <Header course={course}/>  
      <Content content={content}/>
      <Total content={content}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
