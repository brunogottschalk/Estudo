import { Component } from 'react';
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.handler = this.handler.bind(this);

    this.state = {
      textArea: '',
      age: 0,
      drive: false,
    }
  }

  handler ( {target} ) {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <label className ='favoriteState'>
            <p>Digite seu estado Favorito do Brasil!</p>
            <textarea name='textArea' value={this.state.textArea} onChange={this.handler} ></textarea>
          </label>
          <label className='age'>
            <p>Digite sua idade: </p>
            <input name='age' value={this.state.age} type="number" onChange={this.handler} />
          </label>
          <label className='Drive-ability'>
            <p>Sabe dirigir?</p>
            <input type='checkbox' name='drive' value={this.state.drive} onChange={this.handler} />
          </label>
        </form>
      </div>
    )
  }
}

export default App;