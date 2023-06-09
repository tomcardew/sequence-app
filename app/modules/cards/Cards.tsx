import "./Cards.css";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import Navigation from "../../components/Navigation/Navigation";
import CardsList from "../../components/CardsList/CardsList";
import useStore from "../../use-store";

const Cards = observer(() => {
  const { cards } = useStore();
  useEffect(() => {
    cards.load();
  }, [cards]);
  return (
    <div id="cards-container">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Navigation />
      {cards.loading && <LoadingOverlay fullHeight />}
      <CardsList cards={cards.cards} />
    </div>
  );
});

export default Cards;
