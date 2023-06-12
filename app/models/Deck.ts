import { ICard } from "./Card";

export interface IDeckCard {
  type: any;
  card: ICard;
  quantity: number;
}

export interface IDeck {
  name: string;
  cards: IDeckCard[];
  createdAt: string;
  updatedAt: string;
}
