import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data 
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote  
      )
     
    default:
      return state
  }    
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,  
    })
  }    
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }    
}

//luodaan muutettavasta anekdootista päivitetty kopio, 
//jonka tiedot lähetetään palvelimelle ja reducerille tilan päivittämistä varten
export const addVoteTo = votedAnecdote => {
  return async dispatch => {
    const changedAnecdote = {
      ...votedAnecdote,
      votes: votedAnecdote.votes + 1 
    }  
    await anecdoteService.update(changedAnecdote.id, changedAnecdote)
    dispatch({
      type: 'VOTE',
      data: changedAnecdote.id
    })
        
  }
  
}

export default reducer