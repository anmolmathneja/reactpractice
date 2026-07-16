import React, { useState } from 'react'

const App = () => {
  const [uname, setuname] = useState('Anmol')
  const [age, setage] = useState('30')
  const [arr, setarr] = useState([10,20,30])
  const [num, setnum] = useState(0)

  function changeUserValue() {<br />
    setuname('Anku')
    setage('24')
    setarr([10,30,50,70])
  }

  function increaseNum() {
    setnum(num+1);
  }
  
  function decreaseNum() {
    setnum(num-1);
  }

  function increaseNumByFive() {
    setnum(num+5)
  }

  return (
    <div>
      <h1>Name is {uname} and age is {age}<br /><br /> Array is {arr}</h1>
      <button onClick={changeUserValue}>Click to Change</button>
      <hr />
      <br />
      <h3>{num}</h3>
      <button onClick={increaseNum}>Increase</button> | <button onClick={decreaseNum}>Decrease</button> <br>
      </br> <button onClick={increaseNumByFive}>Increase by 5</button>
    </div>
  )
}

export default App
