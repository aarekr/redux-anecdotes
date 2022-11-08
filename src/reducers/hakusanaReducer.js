import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'Premature optimization is the root of all evil.',
    'Any fool can write code that a computer can understand.'
]

const hakusanaSlice = createSlice({
    name: 'hakusana',
    initialState,
    reducers: {
        showFilteredAnecdotes(state, action) {
            const content = action.payload
            console.log('hakusanaSlicen filterChange state:', state)
            console.log('hakusanaSlicen filterChange action:', action)
            console.log('hakusanaSlicen filterChange content:', content)
            const anecdotesToShow = state.filter(n => n.toLowerCase().includes(content.toLowerCase()) ? n : '')
            console.log('hakusanaSlicen filterChange anecdoteToShow:', anecdotesToShow)
            return anecdotesToShow
        },
        filterChange(filter, uusi_filter_arvo) {
            console.log('hakusanaSlicen filterChange filter:', filter.type)
            console.log('hakusanaSlicen filterChange filter:', uusi_filter_arvo.payload)
            let uusi_filter = uusi_filter_arvo.payload
            console.log('hakusanaSlicen filterChange uusi_filter:', uusi_filter)
            return {
              type: 'SET_FILTER',
              filter: uusi_filter,
            }
        }
    }
})

export const { filterChange, showFilteredAnecdotes } = hakusanaSlice.actions
export default hakusanaSlice.reducer