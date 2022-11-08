import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        createAnecdote(state, action) {
            console.log('Reducerin createAnecdote action.payload:', action.payload)
            state.push(action.payload)
        },
        voteAnecdote(state, action) {
            const id = action.payload
            const anecdoteToChange = state.find(n => n.id === id)
            console.log('Reducerin voteAnecdote anecdoteToChange:', anecdoteToChange)
            const changedAnecdote = {
                ...anecdoteToChange,
                votes: anecdoteToChange.votes + 1
            }
            console.log('Reducerin voteAnecdote muutettu:', changedAnecdote)
            state = state.map(anec => anec.id !== id ? anec : changedAnecdote)
            state = state.sort((a,b) => Number(b.votes) - Number(a.votes))
            return state
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
        },
        setAnecdotes(state, action) {
            return action.payload
        }
    }
})

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer