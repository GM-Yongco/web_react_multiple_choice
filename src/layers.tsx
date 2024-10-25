import {Dispatch,SetStateAction} from 'react'
import './App.css'

export interface LayerProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const LayerOne = ({ count, setCount }: LayerProps) => {
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        COCK SIZE is {count}
      </button>
      <LayerTwo count={count} setCount={setCount}/>
    </>
  )
}

export default LayerOne

// =======================================================================
// LAYER 2 SHITE
// =======================================================================

const LayerTwo = ({ count, setCount }: LayerProps) => {
  return (
    <>
      <h1>LAYER TWO</h1>
      <button onClick={() => setCount(count => (count  + 1))}>
        COCK SIZE is {count}
      </button>
    </>
  );
};