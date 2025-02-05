import React from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  
  return (
    <div className='single-item'>

      <input style={{ cursor: 'pointer' }} name="completed" id='completed' type="checkbox" checked={item.completed} onChange={() => {

        editItem(item.id)
      }} />
      <p style={{ textDecoration: item.completed && 'line-through',textTransform:"capitalize" }}> {item.name}</p>


      <button type='button' className='btn remove-btn' onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  )
}

export default SingleItem