import { useDispatch, useSelector } from "react-redux"
import { suodata } from "../reducers/hakusanaReducer"
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { naytaAanestysIlmoitus, resetoiIlmoitus } from '../reducers/notificationReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(suodata(event.target.value))
  }
  const style = { marginBottom: 10 }
  const vote = (id, content, votes) => {
    console.log('AnecdoteList lisätään ääni:', id, votes, content)
    dispatch(voteAnecdote(id, content, votes))
    dispatch(naytaAanestysIlmoitus(content, votes))
    setTimeout(() => { dispatch(resetoiIlmoitus()) }, 5000)
  }
  const naytettavat = useSelector(state => {
    if (state.hakusana === null) {
      return state.anecdotes
    }
    else if (state.filter !== null) {
      let suodatetut = state.anecdotes.filter(joke => joke.content.includes(state.hakusana))
      console.log('suodatetut:', suodatetut)
      return suodatetut
    }
  })

  return (
    <div>
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
      <div>
        {naytettavat.map(anecdote =>
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

export default Filter