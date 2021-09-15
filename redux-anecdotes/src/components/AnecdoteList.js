import React from 'react'
import { addVoteTo } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { showNotification } from '../reducers/notifcationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            {anecdote.content} <br /> has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
        </div>
    )
}

const AnecdoteList = () => {

    const dispatch = useDispatch()
    
    const anecdotes = useSelector(({ filter, anecdotes }) => {

        //jos filtteriä ei ole, palautetaan kaikki anekdootit sortattuna äänten mukaan
        if( filter === ''){

            return anecdotes.sort((first, second) => second.votes - first.votes)
        }

        //muussa tapauksessa palautetaan filtteröidyt anekdootit sortattuna
        const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

        return filteredAnecdotes.sort((first, second) => second.votes - first.votes)
            
    })

    return (
        <div>
            
            {anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                    dispatch(addVoteTo(anecdote))
                    dispatch(showNotification(`you voted '${anecdote.content}'`, 5000))
                    }}
                />
            )}
        </div>  
    )
}

export default AnecdoteList
