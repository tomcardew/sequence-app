import { ICard } from "./Card";

export interface IMatchFieldCardProps {
  selected?: boolean;
  targeted?: boolean;
}

export interface IMatchFieldCard {
  card: ICard; // card template
  properties?: IMatchFieldCardProps;
}

export interface IMatchFieldData {
  action?: IMatchFieldCard[];
  upgrade?: IMatchFieldCard[];
}

export interface IMatchFieldPayload {
  deck: ICard[];
  discarded: ICard[];
  field: IMatchFieldData;
}
