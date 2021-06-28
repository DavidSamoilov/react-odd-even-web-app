import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
const PlayButton = () => {
    const [buttonClicked,setButtonClicked] = useState(false)
    const wasButtonClicked = () => {
        setButtonClicked(true)
    }
    return (
<>
        <div className="d-grid gap-2">
        <Button 
        variant="primary" 
        size="lg"
        onClick={wasButtonClicked}
        >
          Play
        </Button>
      </div>   
</>
    )
}

export default PlayButton
