import { useState } from "react";
import { ICard } from "sequence-core";
import Card from "../Card/Card";
import CardSidePanel from "../SidePanels/CardSidePanel/CardSidePanel";
import "./CardsList.css";
import PagerWithSearch from "../PagerWithSearch/PagerWithSearch";

interface Props {
  cards: ICard[];
}

interface State {
  currentCard?: ICard | null;
}

export default function CardsList({ cards = [] }: Props) {
  const [state, setState] = useState<State>({
    currentCard: null,
  });

  const changeCurrentCard = (card: ICard) => {
    setState((prev) => ({ ...prev, currentCard: card }));
  };

  return (
    <div id="cards-list-container">
      <div className="cards-list-subcontainer">
        <PagerWithSearch />
        <div className="cards-list-content">
          {cards.map((card: ICard) => (
            <Card card={card} onHover={() => changeCurrentCard(card)} />
          ))}
        </div>
      </div>
      <CardSidePanel card={state.currentCard ?? undefined} />
    </div>
  );
}
