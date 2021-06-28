import React, { useState } from 'react'
import PlayButton from './components/PlayButton'
const App = () => {
  const [buttonClicked,setButtonClicked] = useState(false)
  const wasButtonClicked = () => {
      setButtonClicked(true)
  }

  return (
    <div>
        {!buttonClicked ? 
        <PlayButton wasButtonClicked={wasButtonClicked}/>
        :
        <h2>Display user name inputs</h2>
      }
    </div>
  )
}

export default App
