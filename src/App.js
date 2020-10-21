import React, { useState } from 'react';


function App() {
  const [isShow, setShow] = useState(false)
  const [generate, setGenerate] = useState(false)
  const [square, setItem] = useState([
    {id: 1, color: 'brown', select: false },
    {id: 2, color: 'orange', select: false },
    {id: 3, color: 'red', select: false },
    {id: 4, color: 'green', select: false },
    {id: 5, color: 'purple', select: false },
    {id: 6, color: 'grey', select: false },
  ])

const selectItem = (selectId) => {
    setItem( 
      square.map( item => item.id === selectId 
        ? Object.assign(item, {select: item.select === true ? false : true}) 
        : item)
    )
}

function setShowModal () {
  setGenerate(true) 
  setShow(true)
}

function checkOnSelectBlueItem () {
  const firsThreeEl = square.filter(el => el.id <= 3)
  const checkedEl = firsThreeEl.every(el => el.select === true)
  const elAfterThreeIdx = square.filter(el => el.id > 3)
  square.forEach(() => checkedEl && !elAfterThreeIdx.find(i => i.select === true) ? setShowModal() : setShow(true)) 
}
  return (
    <div className="App">
      {isShow && <div style={{backgroundColor: generate 
                                ? 'green' : 'darkred', textAlign: 'center', color: '#fff'}}>
                    {generate ? 'Successfuly' : 'Error'}
                  </div>}
         <div className="wrapper">
           {square.map( (item) => {
           return <div key={item.id} 
                        onClick={() => selectItem(item.id)} 
                        style={{backgroundColor: item.id <= 3 && !generate 
                          ? 'blue': item.color, border: item.select === true ? '4px solid yellow' 
                          : 'none'}} 
                        className="item">
                  </div>
           })}
           <button onClick={checkOnSelectBlueItem}>Submit</button>
    </div>
    </div>
  );
}

export default App;
