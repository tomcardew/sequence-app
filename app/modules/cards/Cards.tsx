import "./Cards.css";

import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import Navigation from "../../components/Navigation/Navigation";

export default function Cards() {
  return (
    <div id="cards-container">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Navigation />
      <LoadingOverlay fullHeight />
    </div>
  );
}
