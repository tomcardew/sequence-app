import { createContext } from "react";
import CardsStore from "./CardsStore";

const rootStoreContext = createContext({
  cards: new CardsStore(),
});

export default rootStoreContext;
