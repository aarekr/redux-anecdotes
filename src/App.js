import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const generateId = () => Number((Math.random() * 1000000).toFixed(0))

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('lisätään anecdote content:', content)
    event.target.anecdote.value = ''
    dispatch({
      type: 'new_anecdote',
      data: {
        content: content,
        id: generateId(),
        votes: 0
      }
    })
  }

  const vote = (id, content, votes) => {
    dispatch({
      type: 'add_vote',
      id: id,
      content: content,
      votes: votes
    })
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