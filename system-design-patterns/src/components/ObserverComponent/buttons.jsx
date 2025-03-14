import { emitter } from "../../ObserverApp";

const Buttons = (props) => {
  const onIncrementCounter = () => {
    emitter.emit("increment");
  };
  const onDecrementCounter = () => {
    emitter.emit("decrement");
  };
  return (
    <div>
      <button onClick={onIncrementCounter}>➕</button>
      <button onClick={onDecrementCounter}>➖</button>
    </div>
  );
};
export default Buttons;
