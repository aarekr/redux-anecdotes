import { filterChange, showFilteredAnecdotes } from '../reducers/hakusanaReducer'
import { useDispatch, useSelector } from 'react-redux'

const HakusanaFilter = () => {
  const dispatch = useDispatch()
  const naytettavat = useSelector(state => {
    console.log('HakusanaFilter näytettävät:', state)
    if (state.filter === 'ALL') {
      return state.anecdotes
    }
    else if (state.filter === 'SEARCH') {
      let aanestetyt = state.anecdotes.filter(joke => Number(joke.votes) > 0)
      console.log('äänestetyt:', aanestetyt)
      return aanestetyt
    }
  })

  let hakusana = ''
  const handleHakusana = (event) => {
    console.log('handleHakusana:', event.target.value)
    let temp = '' + event.target.value
    hakusana = temp
    console.log('handleHakusana hakusana:', hakusana, hakusana.length)
    if (hakusana.length === 0) {
        console.log('if...')
        dispatch(filterChange('ALL'))
    }
    else if (hakusana.length > 0) {
        console.log('else if')
        dispatch(filterChange('SEARCH', 12345))
        //dispatch(showFilteredAnecdotes(hakusana))
    }
  }

  return (
    <div>
      <div>
        filter <input name="filter" onChange={handleHakusana} />

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

export default HakusanaFilter