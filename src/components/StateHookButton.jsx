import React from 'react';

function SomeComponent() {

  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      {hidden ? <h1>{counter}</h1> : <h1>Count Hidden</h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </div>
  );
}

export default SomeComponent;