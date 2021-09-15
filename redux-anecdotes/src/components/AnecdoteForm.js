import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notifcationReducer'

const AnecdoteForm = (props) => {

const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)

    const notificationText = `you added '${content}'`
  
    props.showNotification(notificationText, 5000)

}
return (
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div>
            <input name='anecdote' />
            </div>
            <button type="submit">create</button>
        </form>
    </div>  
)

}

export default connect(
    null,
    { createAnecdote, showNotification }
)(AnecdoteForm)