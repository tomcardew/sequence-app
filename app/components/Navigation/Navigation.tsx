import { useNavigate } from "react-router-dom";

import "./Navigation.css";
import {
  Icons,
  NavigationMenuOption,
  RouteNavigationOptions,
} from "../../constants";
import { Button, IconButton } from "../Buttons";

interface Props {
  menuOptions?: NavigationMenuOption[];
}

export default function Navigation({ menuOptions }: Props) {
  const navigate = useNavigate();

  const { title, hideBackButton, invisible } =
    RouteNavigationOptions[window.location.pathname];

  return (
    <div
      id="navigation-container"
      className={invisible ? "navigation-invisible" : undefined}
    >
      {!hideBackButton && (
        <IconButton icon={Icons.back} onClick={() => navigate(-1)} />
      )}
      <span className="navigation-title">{title}</span>
      <div className="navigation-menu-options-container">
        {menuOptions &&
          menuOptions.map((option) => (
            <Button label={option.label} onClick={option.onClick} />
          ))}
      </div>
    </div>
  );
}
