import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pitchRoll, setPitchRoll] = useState(null);
  const [hitRoll, setHitRoll] = useState(null);
  const [basesRoll, setBasesRoll] = useState(null);

  const rollPitchDice = () => {
    let pitchDice = ["strike", "strike", "ball", "ball", "hit", "hit"];
    let pitchResult = pitchDice[Math.floor(Math.random() * pitchDice.length)];
    setPitchRoll(pitchResult);
  };

  const rollHitDice = () => {
    let hitDice = [
      "error",
      "foul ball",
      "fair ball",
      "fair ball",
      "fly out",
      "ground out",
    ];
    let hitResult = hitDice[Math.floor(Math.random() * hitDice.length)];
    setHitRoll(hitResult);
  };

  const rollBasesDice = () => {
    let baseDice = [
      "single",
      "single",
      "double",
      "double",
      "triple",
      "home run",
    ];
    let basesResult = baseDice[Math.floor(Math.random() * baseDice.length)];
    setBasesRoll(basesResult);
  };

  return (
    <AppContext.Provider
      value={{
        rollPitchDice,
        pitchRoll,
        rollHitDice,
        hitRoll,
        rollBasesDice,
        basesRoll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
