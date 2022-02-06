import React, { useState ,useEffect} from "react";
import "./App.css";
import { Button, Spinner } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };
  //---mounting
  /*  useEffect(() => {
    console.log("hello");
  }, []); */
  //----updating
  /*    useEffect(()=>{
  console.log('hello')
  },[count]) */
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  const content = <h1>this could be any tag</h1>;
  const spinner = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Show
        </Button>
        <div>{show ? content : spinner}</div>
      </div>
    </div>
  );
}

export default App;
