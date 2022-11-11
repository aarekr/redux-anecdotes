import { configureStore } from '@reduxjs/toolkit'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import hakusanaReducer from './reducers/hakusanaReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,     // VisibilityFilter.js, tämä on oma ylimääräinen kokeiluni
    ilmoitus: notificationReducer,
    hakusana: hakusanaReducer  // Filter.js, tehtävä 6.12*
  }
})

console.log('store:', store.getState())

anecdoteService.getAll().then(anecdotes => 
  store.dispatch(setAnecdotes(anecdotes)))

export default store