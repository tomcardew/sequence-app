import './Button.css';

interface Props {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick = () => {} }: Props) {
  return (
    <button id="button-container" onClick={onClick} type="button">
      <div className="button-label">{label}</div>
    </button>
  );
}
