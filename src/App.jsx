/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMassage } from "./components/ColofullMassage";
const App = () => {
  const [num, setNum] = useState(1);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMassage color="blue">お元気ですか?</ColorfulMassage>
      <ColorfulMassage color="pink">元気ですか</ColorfulMassage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(・-・)</p>}
    </>
  );
};

export default App;
