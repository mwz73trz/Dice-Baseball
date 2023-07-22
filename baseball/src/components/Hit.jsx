import { useGlobalContext } from "../context";

const Hit = () => {
  const { rollHitDice, hitRoll, showHitDice } = useGlobalContext();

  return (
    <div>
      <p>Hit Result: {hitRoll}</p>
      {showHitDice && (
        <button onClick={() => rollHitDice(hitRoll)}>Hit Dice</button>
      )}
    </div>
  );
};

export default Hit;
