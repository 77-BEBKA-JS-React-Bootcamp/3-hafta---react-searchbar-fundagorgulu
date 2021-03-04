import './App.css';
import React  from 'react'
import {Component} from 'react'
import ItemContainer from './ItemContainer'
import Logo from './assets/search.png'
class App extends Component {
  state = { 
    items: [],
    search_term: ''
  }
  componentDidMount() {
    fetch("http://universities.hipolabs.com/search?country=turkey")
      .then(response => {
        return response.json();
      })
      .then((data) => {
        this.setState({items: data.map(item=>item.name)})

      })
      .catch(error => console.log(error));
  }
  editSearchTerm =(e)=>{this.setState({search_term: e.target.value})}

  dynamicSearch = ()=>{return this.state.items.filter(item => item.toLowerCase().includes(this.state.search_term.toLowerCase()))}

  render(){
    return(
      <div class="App">
        <img src={Logo}></img>
        <div>
          <input type="text" value={this.state.search_term} onChange={this.editSearchTerm} placeholder='Search..'/>
          <br></br>
          <ItemContainer items={this.dynamicSearch()}/>
        </div>
      </div>
    );
  }
}

export default App;
