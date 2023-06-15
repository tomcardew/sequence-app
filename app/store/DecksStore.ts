import { makeAutoObservable } from "mobx";
import { IDeck } from "sequence-core";
import DecksServices from "../services/DecksServices";

class DecksStore {
  loading = false;

  decks: IDeck[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async load() {
    this.loading = true;
    const data = await DecksServices.getAllDecks();
    this.loading = false;
    if (data.success) {
      this.decks = data.data;
    }
  }
}

export default DecksStore;
