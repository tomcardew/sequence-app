import { createContext } from "react";
import CardsStore from "./CardsStore";
import DecksStore from "./DecksStore";
import GameStore from "./GameStore";

const rootStoreContext = createContext({
  cards: new CardsStore(),
  decks: new DecksStore(),
  game: new GameStore(),
});

export default rootStoreContext;
