import Navigation from "../../components/Navigation/Navigation";
import CardSidePanel from "../../components/SidePanels/CardSidePanel/CardSidePanel";
import "./Match.css";
import MatchField from "./subcomponents/MatchField/MatchField";

export default function Match() {
  return (
    <div id="match-container">
      <Navigation />
      <div id="match-bg-container">
        <img
          className="match-bg-image"
          src="https://img.freepik.com/free-vector/empty-room-with-pink-color_1308-91404.jpg"
          alt=""
        />
      </div>
      <div id="field-content-container">
        <div id="match-content" className="rotation">
          <MatchField
            inverted
            payload={{
              deck: [],
              discarded: [],
              field: { action: [], upgrade: [] },
            }}
          />
          <MatchField
            payload={{
              deck: [],
              discarded: [],
              field: { action: [], upgrade: [] },
            }}
          />
        </div>
        <div id="match-hand-content" />
      </div>
      <div id="match-side-content">
        <CardSidePanel />
      </div>
    </div>
  );
}
