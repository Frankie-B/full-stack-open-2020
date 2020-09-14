import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map(part => (
    <Part key={part.name} part={part.name} exercises={part.exercises} />
  ));

const Exercise = ({ total }) => {
  const totalExercises = total.reduce((sum, part) => {
    console.log("what is happening", sum, part);
    return sum + part.exercises;
  }, 0);
  return (
    <p>
      <strong>Total of {totalExercises} exercises</strong>
    </p>
  );
};
const Course = ({ course }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Exercise total={course.parts} />
    </div>
  );
};
export default Course;