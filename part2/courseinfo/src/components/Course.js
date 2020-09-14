import React from 'react'


const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
}

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

const Content = ({ parts }) =>
  parts.map(part => (
    <Part key={part.name} part={part.name} exercises={part.exercises} />
  ));

const Total = ({ parts }) => {
  let total = parts.reduce((sum, part) => sum + part.exercises, 0) ;
  return (
    <p>Total of {total} exercises</p>
  ); 
}


const Course = ({course}) =>{
  return (
    <div>
      <Header text={course.name} />
      <Content content={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;