import { useGlobalContext } from "../context";

const Bases = () => {
  const { rollBasesDice, basesRoll } = useGlobalContext();

  return (
    <div>
      <p>Bases Result: {basesRoll}</p>
      <button onClick={() => rollBasesDice(basesRoll)}>Bases Dice</button>
    </div>
  );
};

export default Bases;
