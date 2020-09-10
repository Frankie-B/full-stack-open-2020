import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({text, votes=0}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

const App = (props) => {
  const len = props.anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(len).fill(0));
  // const [mostVotes, setMostVotes] = useState(0);

  const getRandom = () => {
    return Math.floor((len) * Math.random(0, len));
  };

  const nextAnecdote = () => {
    setSelected(getRandom(getRandom()));
  };

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;

    setVotes(newVotes);
  }

  const totalVotes = votes.indexOf(Math.max(...votes));
  console.log(totalVotes, Math.max(...votes));



  return (
    <div>
    
      <Header text={'Anecdote of the day'}/>

      <Anecdote
        text={props.anecdotes[selected]}
        votes={votes[selected]}
      />

      <Button handleClick={vote} text={'vote'}/>
      <Button handleClick={nextAnecdote} text={'next anecdote'} />

      <Header text={'Anecdote with the most votes'}/>

      <Anecdote  text={props.anecdotes[totalVotes]} votes={votes[totalVotes]} />
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