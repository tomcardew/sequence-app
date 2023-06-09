import "./Stat.css";

interface Props {
  icon: any;
  label: string | number;
}

export default function Stat({ icon, label }: Props) {
  return (
    <div id="stat-container">
      <img src={icon} alt="" />
      <span>{label}</span>
    </div>
  );
}
