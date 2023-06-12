import { createContext } from "react";
import CardsStore from "./CardsStore";
import DecksStore from "./DecksStore";

const rootStoreContext = createContext({
  cards: new CardsStore(),
  decks: new DecksStore(),
});

export default rootStoreContext;
