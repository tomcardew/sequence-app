import { IDeck, ECardType } from "sequence-core";
import { ObjectType } from "./networking/models";

function objToQueryString(obj: ObjectType) {
  const keyValuePairs = [];
  const keys = Object.keys(obj);
  let i;
  for (i = 0; i < keys.length; i += 1) {
    const key = Object.keys(obj)[i];
    keyValuePairs.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
    );
  }
  return keyValuePairs.join("&");
}

// eslint-disable-next-line prettier/prettier
function deckSummary(deck: IDeck): { action: number, effect: number, upgrade: number } {
  const value = {
    action: 0,
    effect: 0,
    upgrade: 0,
  };

  let i;
  for (i = 0; i < deck.cards.length; i += 1) {
    const card = deck.cards[i];
    switch (card.card.type) {
      case ECardType.ACTION:
        value.action += card.quantity;
        break;
      case ECardType.EFFECT:
        value.effect += card.quantity;
        break;
      case ECardType.UPGRADE:
        value.upgrade += card.quantity;
        break;
      default:
        break;
    }
  }

  return value;
}

export { objToQueryString, deckSummary };
