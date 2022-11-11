import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { naytaLisaysIlmoitus, resetoiIlmoitus } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      console.log('AnecdoteFormin anecdote content:', content)
      event.target.anecdote.value = ''
      dispatch(createAnecdote(content))
      dispatch(naytaLisaysIlmoitus(content))
      setTimeout(() => { dispatch(resetoiIlmoitus()) }, 5000)
    }

    return (
      <form onSubmit={addAnecdote}>
        <h2>create new</h2>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    )
}

export default AnecdoteForm