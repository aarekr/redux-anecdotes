//import AnecdoteList from './components/AnecdoteList' // Ei käytössä koska Filter hoitaa näyttämisen
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import VisibilityFilter from './components/VisibilityFilter'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes)
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <hr />
      <h3>All - Voted - Not Voted</h3>
      <VisibilityFilter />
    </div>
  )
}

export default App