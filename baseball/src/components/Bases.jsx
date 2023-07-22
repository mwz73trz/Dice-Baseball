import { useGlobalContext } from "../context";

const Bases = () => {
  const { rollBasesDice, basesRoll, showBasesDice } = useGlobalContext();

  return (
    <div>
      <p>Bases Result: {basesRoll}</p>
      {showBasesDice && (
        <button onClick={() => rollBasesDice(basesRoll)}>Bases Dice</button>
      )}
    </div>
  );
};

export default Bases;
