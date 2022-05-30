import './App.css';

const Person = () => {
  return (
    <>
      <h1>Name: John</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
    </>
  );
}

const App = () => {
  // variables
  const name = 'John'

  // ternary expressions
  const isNameShowing = true;

  return (
    <div classname="App">
      <h1>Hello, {isNameShowing ? name : 'someone else'}!</h1>

      <Person />
    </div>
  );
}

export default App;
