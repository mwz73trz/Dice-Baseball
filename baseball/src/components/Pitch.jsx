import { useGlobalContext } from "../context";

const Pitch = () => {
  const { rollPitchDice, pitchRoll } = useGlobalContext();

  return (
    <div>
      <p>Pitch Result: {pitchRoll}</p>
      <button onClick={() => rollPitchDice(pitchRoll)}>Pitch Dice</button>
    </div>
  );
};

export default Pitch;
