import React, { useState } from 'react'

const App = () => {
  const [user, setuser] = useState({name:'Anmol',age:'30'})
const [user2, setuser2] = useState([10,20,30])
const [user3, setuser3] = useState({name:'Ajay',age:'20'})
const [num, setnum] = useState(10)
  function buttonClicked() { //object change
    const newuser = {...user}
    newuser.name='Akash'
    newuser.age=41
    setuser(newuser)
  }

  function buttonClicked2() { //Array Change
    const  newuser2 = [...user2]
    newuser2.push(99)
    setuser2(newuser2)
  }

  //Arrow function change
   function buttonClicked3() { 
    setuser3(prev=>({...prev,age:25,name:'Honey',email:'anmol@gmail.com'}))
  }

  //CHeck issue of batch update and solve it
  function buttonClicked4() {
    // setnum(num+1)
    // setnum(num+1)
    // setnum(num+1) wrong way as it will incrememnt by 1 only

    setnum(prev=>prev+1)
    setnum(prev=>prev+1)
    setnum(prev=>prev+1)
  }
  return (
    <div>
      <h1>{user.name}, {user.age}</h1>
      <button onClick={buttonClicked}>Click</button>
      <hr />
      <br />
      <h1>{user2}</h1>
      <button onClick={buttonClicked2}>Click</button>
      <hr />
      <br />
      <h1>{user3.name}, {user3.age}, {user3.email}</h1>
      <button onClick={buttonClicked3}>Click</button>
      <hr />
      <br />
      <h1>{num}</h1>
      <button onClick={buttonClicked4}>Click</button>

    </div>
  )
}

export default App