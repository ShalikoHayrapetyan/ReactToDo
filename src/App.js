
import React from 'react'
import './App.css';
import Form from './Form';
import List from './ToDoList';
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      items: [{
        text: 'Hovhannes Tumanyan',
        id: uuidv4()
    }, {
        text: 'Avetiq Isahakayn',
        id: uuidv4()
    },
    {
      text: 'Paruyr Sevak',
      id: uuidv4()
  }],
      text: ''
    }
  }
  handleInput = (e)  =>  {
    this.setState({
      text: e.target.value,

    })
  }
  addItem = (e) => {
    e.preventDefault()
    const newItems = [...this.state.items]
    newItems.push({
      text: this.state.text,
      id: uuidv4()
  })
    this.setState({
      items: newItems,
      text: ''
    })
  }
  delMe = (id) => {
    
    const newItems = [...this.state.items]
    const index = this.state.items.findIndex((el)=> el.id==id)
    newItems.splice(index,1)
    this.setState({
      items: newItems,
    })
  }

  render() {
    return (
      <div className='todo'>
        <Form text={this.state.text} handleInput={this.handleInput} addItem={this.addItem} />
        <List items={this.state.items} delMe={this.delMe}/>
      </div>
    )
  }
}

export default App;


//function App() {
  //return (
  // <ToDoList />
  //);
//}
