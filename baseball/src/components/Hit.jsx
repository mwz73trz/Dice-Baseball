import { useGlobalContext } from "../context";

const Hit = () => {
  const { rollHitDice, hitRoll } = useGlobalContext();

  return (
    <div>
      <p>Hit Result: {hitRoll}</p>
      <button onClick={() => rollHitDice(hitRoll)}>Hit Dice</button>
    </div>
  );
};

export default Hit;
