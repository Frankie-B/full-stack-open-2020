import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

const Anecdote = ({text, votes=0}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const [mostVotes, setMostVotes] = useState(0);

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;

    if (copy[selected] > votes[mostVotes]) {
      setMostVotes(selected);
    };

    setVotes(copy);

  }

  const nextAnecdote = () => {
    setSelected(getRandom(props.anecdotes.length))
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>

      <Anecdote
        text={props.anecdotes[selected]}
        votes={votes[selected]}
      />

      <Button handleClick={vote} text={'Vote'} />
   
    </div>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);