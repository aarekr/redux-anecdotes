import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteOf } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('lisätään anecdote content:', content)
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  const vote = (id, content, votes) => {
    dispatch(voteOf(id, content, votes))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>has {anecdote.votes} votes <button onClick={
            () => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button></div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App