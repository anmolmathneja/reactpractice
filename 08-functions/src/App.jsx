import React from 'react'


const App = () => {
  function btnClicked() {
  console.log('Button Clicked');
}

function checkInputVal(val){
  console.log(val);
}
  return (
    <div onWheel ={function(elem){console.log(elem.deltaY)}}>
      <div className='page1'><button onWheel={btnClicked} className='btn'>Click Me</button><br /><br />
      <input type='text' onChange={function(elem){ checkInputVal(elem.target.value)}} placeholder='Enter Name'></input></div>
      <div className='page2'></div>
      <div className='page3'></div>
      
    </div>
  )
}

export default App
