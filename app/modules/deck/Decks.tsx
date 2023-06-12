import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import Navigation from "../../components/Navigation/Navigation";
import "./Decks.css";
import useStore from "../../use-store";
import DeckView from "./subcomponents/DeckView/DeckView";
import { deckSummary } from "../../utils";

const Decks = observer(() => {
  const { decks } = useStore();
  useEffect(() => {
    decks.load();
  }, [decks]);
  return (
    <div id="decks-container">
      <Navigation
        menuOptions={[
          {
            label: "Nuevo deck",
            onClick: () => {},
          },
        ]}
      />
      {decks.loading && <LoadingOverlay fullHeight />}
      <div id="decks-content">
        {decks.decks.map((deck) => {
          const { action, effect, upgrade } = deckSummary(deck);
          return (
            <DeckView
              name={deck.name}
              actionCount={action}
              effectCount={effect}
              upgradeCount={upgrade}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Decks;
