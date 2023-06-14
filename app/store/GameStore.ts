import { makeAutoObservable } from "mobx";
import { ICard } from "../models/Card";
import { IMatchFieldCard, IMatchFieldPayload } from "../models/Match";

type ICardList = ICard[];

class GameStore {
  loading = false;

  // GAME DATA
  #deck: ICardList = [];

  #discarded: ICardList = [];

  #actions: IMatchFieldCard[] = []; // remember an action is the card that attacks

  #upgrades: IMatchFieldCard[] = []; // and upgrades apply to a single action

  constructor() {
    makeAutoObservable(this);
  }

  /* --------- GETTERS ---------- */

  get state(): IMatchFieldPayload {
    return {
      deck: this.#deck,
      discarded: this.#discarded,
      field: {
        action: this.#actions,
        upgrade: this.#upgrades,
      },
    };
  }

  /* --------- METHODS ---------- */

  async initialize() {
    this.loading = true;
    // do magic stuff
    this.loading = false;
  }
}

export default GameStore;
