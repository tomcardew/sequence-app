import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import Navigation from "../../components/Navigation/Navigation";
import "./Decks.css";

export default function Decks() {
  return (
    <div id="decks-container">
      <Navigation />
      <LoadingOverlay fullHeight />
    </div>
  );
}
