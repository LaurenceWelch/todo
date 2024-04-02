import { useEffect } from "react";
import joy from "../assets/joy.png";
import { useDispatch } from "react-redux";
import { setView } from "../features/uiSlice.js";

const addSparkly = (left, top, delay) => {
  let s = document.createElement("star-graphic");
  s.style.setProperty("--left", `${left}%`);
  s.style.setProperty("--top", `${top}%`);
  s.style.setProperty("--delay", `${delay}s`);
  let main = document.querySelector("sparkly-widget");
  main.appendChild(s);
};

const Sparkly = () => {
  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      const left = Math.random() * 100;
      const right = Math.random() * 100;
      const delay = Math.random() * 3;
      addSparkly(left, right, delay);
    }
  }, []);
  const dispatch = useDispatch();
  return (
    <sparkly-widget>
      <p>nice!</p>
      <img src={joy} />
      <button onClick={() => dispatch(setView(0))}>yay!</button>
    </sparkly-widget>
  );
};

export default Sparkly;
