import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet deptName="CSE" institute = "CSPIT">
        <p>This Children Element</p>
      </Greet>
      <Greet deptName="CE" institute = "CSPIT">
        <button>Click Me</button>
      </Greet>
      <Greet deptName="IT" institute = "CSPIT"></Greet>

      <Welcome deptName="CSE"></Welcome>
      <Welcome deptName="CE"></Welcome>
      <Welcome deptName="IT"></Welcome> */}

      {/* <Message></Message> */}

      <Counter></Counter>
    </div>
  );
}

export default App;
