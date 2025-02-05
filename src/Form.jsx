import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = ({addItem}) => {
  const [itemName,setItemName]=useState('');
const handleSubmit=(e)=>{
  e.preventDefault()
  if(itemName===''){
    toast.error('please fill the feild');
    return
  }
  addItem(itemName);
  setItemName('')
}

  
  return (
    <form onSubmit={handleSubmit}>

        <h4>grocery bud</h4>

        <div className="form-control">

            <input placeholder='grocery items. eg:banana, chicken ,egg etc' style={{paddingLeft:'0.5rem'}} type="text" name='name' id='id' value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
            <button className='btn'>Submit</button>
        </div>
    </form>
  )
}

export default Form