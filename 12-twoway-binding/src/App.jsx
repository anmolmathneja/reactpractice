import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  function buttonHandler(e) {
    e.preventDefault();
    console.log(title);
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=> {buttonHandler(e)}}>
        <input type='text' placeholder='Enter Name' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default App