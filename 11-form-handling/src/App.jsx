import React from 'react'

const App = () => {

  function buttonHandler(e) {
    e.preventDefault();
    console.log('Form submit Done');
  }
  return (
    <div>
      <form onSubmit={(e)=> {buttonHandler(e)}}>
        <input type='text' placeholder='Enter Name' />
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default App