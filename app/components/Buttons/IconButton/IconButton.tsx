import "./IconButton.css";

interface Props {
  icon: string;
  onClick?: () => void;
}

export default function IconButton({ icon, onClick }: Props) {
  return (
    <button className="icon-button" type="button" onClick={onClick}>
      <img src={icon} alt="Ir atrás" />
    </button>
  );
}
