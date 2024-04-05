import { useState } from "react";

const ButtonWithModal = (props) => {
  const [show, setShow] = useState(false);
  const content = show ? (
    <confirmation-outer>
      <modal-popup>
        <div className="x-bar">
          <x-button onClick={() => setShow(false)}>X</x-button>
        </div>
        <div className="section">
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
        </div>
      </modal-popup>
    </confirmation-outer>
  ) : (
    <button onClick={() => setShow(true)}>{props.children}</button>
  );
  return <div>{content}</div>;
};

export default ButtonWithModal;
