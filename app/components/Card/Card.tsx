import { ICard } from '../../models/Card';
import './Cards.css';

interface ICardProps {
  card?: ICard;
}

export default function Card({ card }: ICardProps) {
  // eslint-disable-next-line global-require

  return (
    <div id="card-container">
      <div id="card-content">
        <img src={card?.front} alt="" />
      </div>
      Card
    </div>
  );
}
