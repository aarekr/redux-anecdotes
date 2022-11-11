import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { naytaAanestysIlmoitus, resetoiIlmoitus } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  console.log('AnecdoteListin anecdotes:', anecdotes['anecdotes'])

  const vote = (id, content, votes) => {
    console.log('AnecdoteList lisätään ääni:', id, votes, content)
    dispatch(voteAnecdote(id, content, votes))
    dispatch(naytaAanestysIlmoitus(content, votes))
    setTimeout(() => { dispatch(resetoiIlmoitus()) }, 5000)
  }

  return (
    <div>
      <div>
        {anecdotes['anecdotes'].map(anecdote =>
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>has {anecdote.votes} votes <button onClick={
              () => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnecdoteList