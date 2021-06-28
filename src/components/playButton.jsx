import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
const PlayButton = ({wasButtonClicked}) => {
    
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
