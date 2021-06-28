import React, { useState } from 'react'
import PlayButton from './components/PlayButton'
import UserNamesForm from './components/UserNamesForm'
const App = () => {





























  const [buttonClicked,setButtonClicked] = useState(false)
  const wasButtonClicked = () => {
      setButtonClicked(true)
  }

  const [user1Name,setUser1Name] = useState("")
  const [user2Name,setUser2Name] = useState("")


  return (
    <>
        {!buttonClicked ? 
        <PlayButton wasButtonClicked={wasButtonClicked}/>
        :
        <>
        <UserNamesForm setUser1Name={setUser1Name} setUser2Name={setUser2Name}/>
        {user1Name}
        {user2Name}
        </>
      }


    </>
  )
}

export default App
