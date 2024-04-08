import "./button.module.scss";

export function Button({ btnText, onClick }) {
  return <button onClick={onClick}>{btnText}</button>;
}
