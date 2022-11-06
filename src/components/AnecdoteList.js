import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    console.log('AnecdoteListin anecdotes:', anecdotes['anecdotes'])
    const dispatch = useDispatch()

    const vote = (id, content, votes) => {
      console.log('AnecdoteList lisätään ääni:', id, votes, content)
      dispatch(voteAnecdote(id, content, votes))
    }

    return (
        <div>
            {anecdotes['anecdotes'].map(anecdote =>
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>has {anecdote.votes} votes <button onClick={
                () => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button></div>
            </div>
          )}
        </div>
    )
}

export default AnecdoteList