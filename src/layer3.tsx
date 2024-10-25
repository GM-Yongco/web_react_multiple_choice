import {LayerProps} from "./layers.tsx"
  
const LayerThree = ({ count, setCount }: LayerProps) => {
  return (
    <>
      <h1>LAYER THREE</h1>
      <button onClick={() => setCount(count => (count  + 1))}>
        COCK SIZE is {count}
      </button>
    </>
  );
};

export default LayerThree