import { makeAutoObservable } from "mobx";

class GameStore {
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export default GameStore;
