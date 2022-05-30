import './App.css';

const App = () => {
  // variables
  const name = 'John'

  // ternary expressions
  const isNameShowing = true;

  return (
    <div classname="App">
      <h1>Hello, {isNameShowing ? name : 'someone else'}!</h1>
    </div>
  );
}

export default App;
