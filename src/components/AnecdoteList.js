import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id, content, votes) => {
        dispatch(voteAnecdote(id, content, votes))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
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