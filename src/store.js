import { createStore, combineReducers } from '@reduxjs/toolkit'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import hakusanaReducer from './reducers/hakusanaReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  hakusana: hakusanaReducer
})

const store = createStore(reducer)

console.log('store:', store.getState())

anecdoteService.getAll().then(anecdotes => 
  store.dispatch(setAnecdotes(anecdotes)))

export default store