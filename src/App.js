import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Routes from './routes';



function App() {
 return (
   <BrowserRouter>
      <Routes />
   </BrowserRouter>
 );
}
export default App;

class App extends Component {
  render() {
    const { newValue } = this.props;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' />
        <button>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

function App() {
  return (
    <h1>CountriesNow</h1>
  );
 }

 
  
 export default App;

export default connect(mapStateToProps)(App);