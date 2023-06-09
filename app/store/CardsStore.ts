import { makeAutoObservable } from "mobx";
import { ICard } from "../models/Card";
import CardsServices from "../services/CardsServices";

class CardsStore {
  loading = false;

  cards: ICard[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async load() {
    this.loading = true;
    const data = await CardsServices.getAllCards();
    this.loading = false;
    if (data.success) {
      this.cards = data.data;
    }
  }
}

export default CardsStore;
