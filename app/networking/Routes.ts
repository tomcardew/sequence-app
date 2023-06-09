/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import { NetworkingConfig, RequestMethod } from "./models";

const fullURL = "http://localhost:4100"

const getAllCards: NetworkingConfig = {
  url: fullURL,
  path: "cards/all",
  method: RequestMethod.GET,
};

const getAllDecks: NetworkingConfig = {
  url: fullURL,
  path: "decks/all",
  method: RequestMethod.GET,
};

const newDeck: NetworkingConfig = {
  url: fullURL,
  path: "decks/new",
  method: RequestMethod.POST,
};

const state: NetworkingConfig = {
  url: fullURL,
  path: "play/state",
  method: RequestMethod.POST,
};

export const Requester = {
  cards: {
    getAllCards,
  },
  decks: {
    getAllDecks,
    newDeck,
  },
  play: {
    state,
  }
}
