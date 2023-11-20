function ToggleButton({ on, setOnState }) {
  const toggle = () => setOnState((o) => !o);

  return (
    <button
      class={`toggle-button ${on ? "on" : "off"}`}
      on={on}
      onClick={toggle}
    >
      <span class="pin" />
    </button>
  );
}

export default ToggleButton;
