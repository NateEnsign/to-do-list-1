import React, {useState} from 'react'

const Form = (props) => {
    const [userInput, setUserInput] = useState("")

    const handleChange = (event) => setUserInput(event.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        props.addTask(userInput)
        console.log(userInput)
        setUserInput("")
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Add a Task</h1>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button>Add Task</button>
        </form>
    )
}

export default Form