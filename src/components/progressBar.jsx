import { useSelector } from "react-redux";
import { progressRatio, todoCount } from "../features/todoSlice";
import { memo, useEffect } from "react";

const getMain = () => {
  return document.querySelector("progress-container");
};
const show = () => {
  getMain().style.display = "block";
};
const hide = () => {
  getMain().style.display = "none";
};

const ProgressBar = () => {
  const progress = useSelector(progressRatio);
  const numTodos = useSelector(todoCount);
  useEffect(() => {
    if (numTodos !== 0) {
      let b = document.querySelector("progress-bar");
      if (progress === 0) hide();
      else show();
      b.style.setProperty("width", `${progress * 100}%`);
    }
  }, [progress]);
  useEffect(() => {
    const arr = document.querySelectorAll("progress-dash");
    for (const e of arr) {
      // clear existing dashes
      e.remove();
    }
    if (numTodos === 0) {
      hide();
    } else {
      const space = 100 / numTodos;
      let main = document.querySelector("progress-container");
      for (let i = 0; i < numTodos; i++) {
        const ele = document.createElement("progress-dash");
        ele.style.setProperty("width", `${i * space + space}%`);
        main.appendChild(ele);
      }
    }
  }, [numTodos]);
  return (
    <progress-container>
      <progress-bar></progress-bar>
    </progress-container>
  );
};

export default memo(ProgressBar);
