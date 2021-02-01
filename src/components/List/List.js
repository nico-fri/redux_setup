import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectList } from '../../reducers/listSlice'
import './List.css'

function List() {
  const [item, setItem] = useState('')
  const dispatch = useDispatch()
  const list = useSelector(selectList)

  const handleClick = () => {
    dispatch(addItem(item))
    setItem('')
  }

  return (
    <div className='list'>
      <h1>List Example</h1>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type='text'
      />
      <button onClick={handleClick}>Add Item</button>
      {list.list.map((item, index) => (
        <div className='list' key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default List
