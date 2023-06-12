import Stat from "../../../../components/Card/Subcomponents/Stat/Stat";
import { Icons } from "../../../../constants";
import "./DeckView.css";

interface Props {
  name: string;
  actionCount: number;
  effectCount: number;
  upgradeCount: number;
}

export default function DeckView({
  name,
  actionCount,
  effectCount,
  upgradeCount,
}: Props) {
  return (
    <div id="deck-view-container">
      <span className="deck-view-title">{name}</span>
      <div className="deck-view-stats">
        <Stat icon={Icons.action} label={actionCount} />
        <Stat icon={Icons.effect} label={effectCount} />
        <Stat icon={Icons.upgrade} label={upgradeCount} />
      </div>
    </div>
  );
}
