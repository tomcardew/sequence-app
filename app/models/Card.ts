export interface IStats {
  damage: number;
  cost: number;
}

export enum ECardType {
  // eslint-disable-next-line prettier/prettier
  ACTION = "action",
  // eslint-disable-next-line prettier/prettier
  EFFECT = "effect",
  // eslint-disable-next-line prettier/prettier
  UPGRADE = "upgrade",
}

export interface ICardAction {
  name: string;
  value: any;
}

export interface ICardActions {
  onActivated: ICardAction[];
  onExecuted: ICardAction[];
  onEquipped: ICardAction[];
  onAttacked: ICardAction[];
}

export interface ICard {
  name: string;
  description: string;
  effect: string;
  front?: string;
  stats: IStats;
  type: ECardType;
  actions: ICardActions;
  equipmentSlots: number;
}
