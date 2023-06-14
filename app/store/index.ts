import { createContext } from "react";
import CardsStore from "./CardsStore";
import DecksStore from "./DecksStore";
import GameStore from "./GameStore";

const rootStoreContext = createContext({
  cards: new CardsStore(),
  decks: new DecksStore(),
  myGame: new GameStore(),
  opponentsGame: new GameStore(),
});

export default rootStoreContext;
