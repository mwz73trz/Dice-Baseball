import { useGlobalContext } from "../context";

const Scoreboard = () => {
  const { strikes, balls, outs } = useGlobalContext();
  return (
    <div>
      <h2>Ball: {balls}</h2>
      <h2>Strikes: {strikes}</h2>
      <h2>Outs: {outs}</h2>
    </div>
  );
};

export default Scoreboard;
