import logo from './logo.svg';
import './App.css';

const Numbers = [1,2,3,4,5]
function App() {
  const findMinimumOfNumber = ()=>{
    let min = Numbers[0]
    for(let i=1;i<Numbers.length;i++){
      if(Numbers[i]<min){
        min = Numbers[i]
      }
    }
    return min
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
