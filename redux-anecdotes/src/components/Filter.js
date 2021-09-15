import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    
    //input-kentän arvo muuttujassa event.target.value
    const newFilter = event.target.value

    console.log(newFilter)

    //lähetetään filtterin arvo filterReducerin käyttöön kutsumalla action creatoria
    dispatch(filterChange(newFilter))

  }
  const style = {
    marginBottom: 10,
    marginTop: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter