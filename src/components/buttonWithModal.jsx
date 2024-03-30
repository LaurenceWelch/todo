import { useState } from "react";

const ButtonWithModal = (props) => {
  const [show, setShow] = useState(false);
  const content = show ? (
    <confirmation-outer>
      <confirmation-inner>
        <h2>Are you sure?</h2>
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
