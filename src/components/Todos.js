import React, { useState } from 'react'
import './Todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Todos() {
  const [init, setinit] = useState();
  const [data, setdata] = useState([]);

  const getchange = (event) => {
    setinit(event.target.value);

  }

  const getData = () => {
    let store = [...data, init]
    setdata(store);
    setinit("");

  }

  const deleteitem = (index)=>{
    let filterdata = data.filter((curelm, id)=>{
      return id !== index;
    })
    setdata(filterdata);
  }
  return (
    <div>
      <div className='container'>
        <div className='name'>
          <h1>Todo List</h1>
        </div>
        <div className='inputItem'>
          <div className='text'>
            <input type="text" placeholder='task name' className='input' value={init} onChange={getchange} onKeyDown={(event) => {
              if (event.key === 'Enter') {getData();}}} />
            <button className='button' type='submit' onClick={getData}>Add</button>
          </div>
          {data.map((curval, index) => {
            return (
              <>
                <div className='paq'>
                  <h2>{curval}</h2>
                  <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteitem(index)} />
                </div>
              </>
            )
          })}

        </div>

      </div>
    </div>
  )
}
