
import React from 'react'

class Form extends React.Component {
  
  render() {
    const {text, handleInput, addItem} = this.props
    return(
        <div className="select">            
       <input type='text' placeholder='Name Surname' value = {text} onChange = {handleInput} id="input"></input>
        <button id="add" onClick={addItem}>Add</button>
        </div>
    )
  }
}
export default Form