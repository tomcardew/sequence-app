import { ICard } from "../../../models/Card";
import Card from "../../Card/Card";
import "./CardSidePanel.css";

interface Props {
  card?: ICard;
  width?: number;
}

export default function CardSidePanel({ card, width = 300 }: Props) {
  const data = [
    {
      name: "Descripción",
      value: card?.description,
    },
    {
      name: "Efecto",
      value: card?.effect,
    },
    {
      name: "Colección",
      value: card?.season,
    },
  ];

  return (
    <div id="card-side-panel" style={{ width }}>
      <div className="card-side-content">
        <Card card={card} />
        <span className="card-side-content-title">{card?.name}</span>
        {card &&
          data.map((item) => (
            <div className="card-side-content-item">
              <span className="card-side-content-subtitle">{item.name}</span>
              <span className="card-side-content-label">{item.value}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
