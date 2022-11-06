const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
}

const initialState = anecdotesAtStart.map(asObject)

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createAnecdote = (content) => {
    return {
      type: 'new_anecdote',
      data: {
        content: content,
        id: generateId(),
        votes: 0
      }
    }
}

export const voteAnecdote = (id, content, votes) => {
    return{
      type: 'add_vote',
      id: id,
      content: content,
      votes: votes
    }
}

const reducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    console.log('action.type', action.type)

    switch(action.type){
        case 'new_anecdote':
            const newAnecdote = {
                content: action.data.content,
                id: action.data.id,
                votes: action.data.votes
            }
            console.log('valmis uusi anecdote:', newAnecdote)
            state = state.concat(newAnecdote)
            return state
        case 'add_vote':
            const anecdoteToChange = state.find(n => Number(n.id) === Number(action.id))
            console.log('muutettava anecdote:', anecdoteToChange)
            
            const changedAnecdote = { 
                content: action.content,
                id: action.id,
                votes: action.votes + 1
            }

            console.log('changedAnecdote:', changedAnecdote)
            state = state.map(n => Number(n.id) === Number(action.id) ? changedAnecdote : n)
            state = state.sort((a,b) => Number(b.votes) - Number(a.votes))
            return state
        default: return state
    }
}

export default reducer