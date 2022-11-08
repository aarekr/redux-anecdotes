import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log('lisätään anecdote content:', content)
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
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