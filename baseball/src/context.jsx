import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pitchRoll, setPitchRoll] = useState(null);
  const [hitRoll, setHitRoll] = useState(null);
  const [basesRoll, setBasesRoll] = useState(null);
  const [showPitchDice, setShowPitchDice] = useState(true);
  const [showHitDice, setShowHitDice] = useState(false);
  const [showBasesDice, setShowBasesDice] = useState(false);
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);

  const strikesCounter = () => {
    if (strikes < 2) setStrikes((strikes) => strikes + 1);
    if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
      outCounter();
    }
  };

  const ballCounter = () => {
    if (balls < 3) setBalls((balls) => balls + 1);
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    }
  };

  const outCounter = () => {
    if (outs < 2) setOuts((outs) => outs + 1);
    if (outs === 2) setOuts(0);
  };

  const rollPitchDice = () => {
    let pitchDice = ["strike", "strike", "ball", "ball", "hit", "hit"];
    let pitchResult = pitchDice[Math.floor(Math.random() * pitchDice.length)];

    if (pitchResult === "ball") ballCounter();
    if (pitchResult === "strike") strikesCounter();

    if (pitchResult === "hit") {
      setShowPitchDice(false);
      setShowHitDice(true);
    }
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

    if ((hitResult === "fly out" || hitResult === "ground out") && outs < 2) {
      setBalls(0);
      setStrikes(0);
      outCounter();
      setShowHitDice(false);
      setShowPitchDice(true);
    }
    if ((hitResult === "fly out" || hitResult === "ground out") && outs === 2) {
      setBalls(0);
      setStrikes(0);
      outCounter();
      setShowHitDice(false);
      setShowPitchDice(true);
    }
    if (hitResult === "fair ball") {
      setShowHitDice(false);
      setShowBasesDice(true);
    }
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

    if (basesResult === "single") {
      setBalls(0);
      setStrikes(0);
      setShowBasesDice(false);
      setShowPitchDice(true);
    }
    if (basesResult === "double") {
      setBalls(0);
      setStrikes(0);
      setShowBasesDice(false);
      setShowPitchDice(true);
    }
    if (basesResult === "triple") {
      setBalls(0);
      setStrikes(0);
      setShowBasesDice(false);
      setShowPitchDice(true);
    }
    if (basesResult === "home run") {
      setBalls(0);
      setStrikes(0);
      setShowBasesDice(false);
      setShowPitchDice(true);
    }
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
        showPitchDice,
        showHitDice,
        showBasesDice,
        strikes,
        balls,
        outs,
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
