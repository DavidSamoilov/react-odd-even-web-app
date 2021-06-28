import React from 'react'
import InputForm from './Utilities/InputForm'

const UserNamesForm = ({setUser1Name,setUser2Name}) => {
    return (
        <>
        <div>
            <InputForm inputSetState={setUser1Name} inputName={"Player 1"} />
        </div>
        <div>
            <InputForm inputSetState={setUser2Name} inputName={"Player 2"} />
        </div>
            
        </>
    )
}

export default UserNamesForm
