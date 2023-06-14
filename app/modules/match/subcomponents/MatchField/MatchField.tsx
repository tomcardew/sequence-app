import Card from "../../../../components/Card/Card";
import CardLike from "../../../../components/CardLike/CardLike";
import { Icons } from "../../../../constants";
import { ICard } from "../../../../models/Card";
import "./MatchField.css";

export interface IMatchFieldCardProps {
  selected?: boolean;
  targeted?: boolean;
}

export interface IMatchFieldCard {
  card: ICard; // card template
  properties?: IMatchFieldCardProps;
}

export interface IMatchFieldPayload {
  deck: IMatchFieldCard[];
  discarded: IMatchFieldCard[];
  field: {
    action?: IMatchFieldCard[],
    upgrade?: IMatchFieldCard[],
  };
}

interface Props {
  payload?: IMatchFieldPayload;
  inverted?: boolean;
}

export default function MatchField({ payload, inverted }: Props) {
  const deck = payload?.deck;
  const field = payload?.field;
  const discarded = payload?.discarded;

  const actions: (IMatchFieldCard | undefined)[] = [
    field?.action && field?.action[0],
    field?.action && field?.action[1],
    field?.action && field?.action[2],
    field?.action && field?.action[3],
    field?.action && field?.action[4],
  ];

  const upgrades: (IMatchFieldCard | undefined)[] = [
    field?.upgrade && field.upgrade[0],
    field?.upgrade && field.upgrade[1],
    field?.upgrade && field.upgrade[2],
    field?.upgrade && field.upgrade[3],
    field?.upgrade && field.upgrade[4],
  ];

  return (
    <div
      id="match-field-container"
      className={inverted ? "inverted" : undefined}
    >
      <div id="match-field-content-container">
        <div id="matt-container">
          <img
            className="matt-image"
            src="https://i.pinimg.com/originals/02/f2/64/02f2649eaa7743a8e0a117c3e0a386ee.jpg"
            alt=""
          />
        </div>
        <CardLike>{deck && deck.length > 0 && <Card />}</CardLike>
        <div id="match-field-content">
          <div className="match-field-grid" id="match-field-actions">
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {actions[0] && <Card card={actions[0].card} />}
              {actions[1] && (
                <div className="match-field-next-icon float">
                  <img src={Icons.next} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {actions[1] && <Card card={actions[1].card} />}
              {actions[2] && (
                <div className="match-field-next-icon float">
                  <img src={Icons.next} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {actions[2] && <Card card={actions[2].card} />}
              {actions[3] && (
                <div className="match-field-next-icon float">
                  <img src={Icons.next} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {actions[3] && <Card card={actions[3].card} />}
              {actions[4] && (
                <div className="match-field-next-icon float">
                  <img src={Icons.next} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {actions[4] && <Card card={actions[4].card} />}
            </CardLike>
          </div>
          <div className="match-field-grid" id="match-field-upgrades">
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {upgrades[0] && <Card card={upgrades[0].card} />}
              {upgrades[0] && (
                <div className="match-field-upgrade-icon">
                  <img src={Icons.upgrade} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {upgrades[1] && <Card card={upgrades[1].card} />}
              {upgrades[1] && (
                <div className="match-field-upgrade-icon">
                  <img src={Icons.upgrade} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {upgrades[2] && <Card card={upgrades[2].card} />}
              {upgrades[2] && (
                <div className="match-field-upgrade-icon">
                  <img src={Icons.upgrade} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {upgrades[3] && <Card card={upgrades[3].card} />}
              {upgrades[3] && (
                <div className="match-field-upgrade-icon">
                  <img src={Icons.upgrade} alt="next" />
                </div>
              )}
            </CardLike>
            <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
              {upgrades[4] && <Card card={upgrades[4].card} />}
              {upgrades[4] && (
                <div className="match-field-upgrade-icon">
                  <img src={Icons.upgrade} alt="next" />
                </div>
              )}
            </CardLike>
          </div>
        </div>
        <CardLike style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
          {discarded && discarded.length > 0 && (
            <Card card={discarded && discarded[0].card} />
          )}
        </CardLike>
      </div>
    </div>
  );
}
