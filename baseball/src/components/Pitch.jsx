import { useGlobalContext } from "../context";

const Pitch = () => {
  const { rollPitchDice, pitchRoll, showPitchDice } = useGlobalContext();

  return (
    <div>
      <p>Pitch Result: {pitchRoll}</p>
      {showPitchDice && (
        <button onClick={() => rollPitchDice(pitchRoll)}>Pitch Dice</button>
      )}
    </div>
  );
};

export default Pitch;
