import { useState } from "react";

const ButtonWithModal = (props) => {
  const [show, setShow] = useState(false);
  const content = show ? (
    <confirmation-outer>
      <confirmation-inner>
        <h1>Are you sure?</h1>
        <button
          onClick={() => {
            props.action();
            setShow(false);
          }}
        >
          yes
        </button>
        <button onClick={() => setShow(false)}>cancel</button>
      </confirmation-inner>
    </confirmation-outer>
  ) : (
    <button onClick={() => setShow(true)}>{props.children}</button>
  );
  return <div>{content}</div>;
};

export default ButtonWithModal;
