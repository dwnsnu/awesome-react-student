import React, { Component } from "react";
// import Counter from '../components/Counter'
import Buttons from "../components/Buttons";
import CounterListContainer from "../containers/CounterListContainer";
import { connect } from "react-redux";
import * as actions from "../actions";

import { getRandomColor } from "../utils";

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div>
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainer />
      </div>
    );
  }
}

// 액션함수 준비
const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: index => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(
  null,
  mapToDispatch
)(App);
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
