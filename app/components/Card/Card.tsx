import { ICard, ECardType } from "sequence-core";
import { CardDefaults, Icons } from "../../constants";
import "./Card.css";
import Stat from "./Subcomponents/Stat/Stat";

interface ICardProps {
  card?: ICard;

  onHover?: () => void;
}

export default function Card({ card, onHover }: ICardProps) {
  // eslint-disable-next-line global-require
  const cardIcon = () => {
    if (card) {
      switch (card?.type) {
        case ECardType.ACTION:
          return Icons.action;
        case ECardType.EFFECT:
          return Icons.effect;
        case ECardType.UPGRADE:
          return Icons.upgrade;
        default:
          return Icons.energy;
      }
    }
    return undefined;
  };

  return (
    <div id="card-container" onMouseEnter={onHover}>
      <div id="card-content">
        <img
          className="card-content-front"
          src={card?.front ?? CardDefaults.front}
          alt=""
        />
        {card && (
          <div id="card-data-container">
            <div className="card-data-name">{card.name}</div>
            <div className="card-data-stats">
              <Stat icon={Icons.attack} label={card.stats.damage} />
              <Stat icon={Icons.energy} label={card.stats.cost} />
              <Stat icon={Icons.slots} label={card.stats.equipment} />
            </div>
          </div>
        )}
        {card && (
          <div className="card-data-type">
            <img src={cardIcon()} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
