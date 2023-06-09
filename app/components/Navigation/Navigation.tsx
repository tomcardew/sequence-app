import { useNavigate } from "react-router-dom";

import "./Navigation.css";
import { Icons, RouteNavigationOptions } from "../../constants";

export default function Navigation() {
  const navigate = useNavigate();

  const { title, hideBackButton } =
    RouteNavigationOptions[window.location.pathname];

  return (
    <div id="navigation-container">
      {!hideBackButton && (
        <button
          className="back-button"
          type="button"
          onClick={() => navigate(-1)}
        >
          <img src={Icons.back} alt="Ir atrás" />
        </button>
      )}
      <span className="navigation-title">{title}</span>
    </div>
  );
}
