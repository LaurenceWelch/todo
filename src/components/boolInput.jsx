const BoolInput = (props) => {
  const { si, onChangeUrgency } = props;
  const bc1 = si === 0 ? "normal-selected" : "normal-not-selected";
  const bc2 = si === 1 ? "urgent-selected" : "urgent-not-selected";
  return (
    <bool-container>
      <button onClick={() => onChangeUrgency(0)} className={bc1}>
        normal
      </button>
      <button onClick={() => onChangeUrgency(1)} className={bc2}>
        urgent
      </button>
    </bool-container>
  );
};

export default BoolInput;
