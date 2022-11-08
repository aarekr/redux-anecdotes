import { filterChange } from '../reducers/filterReducer'
import { useDispatch, useSelector } from 'react-redux'

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()
  const naytettavat = useSelector(state => {
    console.log('näytettävät:', state)
    if (state.filter === 'ALL') {
      return state.anecdotes
    }
    else if (state.filter === 'VOTED') {
      let aanestetyt = state.anecdotes.filter(joke => Number(joke.votes) > 0)
      console.log('äänestetyt:', aanestetyt)
      return aanestetyt
    }
    else if (state.filter === 'NOT VOTED') {
      let ei_aanestetyt = state.anecdotes.filter(joke => Number(joke.votes) === 0)
      console.log('ei_äänestetyt:', ei_aanestetyt)
      return ei_aanestetyt
    }
  })

  return (
    <div>
      <div>
        all <input type="radio" name="filter"
          onChange={() => dispatch(filterChange('ALL'))} />
        voted <input type="radio" name="filter"
          onChange={() => dispatch(filterChange('VOTED'))} />
        not voted <input type="radio" name="filter"
          onChange={() => dispatch(filterChange('NOT VOTED'))} />
      </div>
      <div>
        {naytettavat.map(anecdote =>
          <div key={anecdote.id}>
            <li>{anecdote.content}</li>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default VisibilityFilter