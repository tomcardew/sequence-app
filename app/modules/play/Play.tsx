import { useNavigate } from "react-router-dom";

import "./Play.css";
import { Button } from "../../components/Buttons";
import Navigation from "../../components/Navigation/Navigation";
import PlayField from "./subcomponents/PlayField/PlayField";

const routes = [
  {
    name: "Unirse",
    route: "/play/join",
  },
  {
    name: "Crear",
    route: "/play/create",
  },
  {
    name: "Configuración",
    route: "/play/config",
  },
];

export default function Play() {
  const navigate = useNavigate();
  return (
    <div id="play-container">
      <Navigation />
      <div id="play-content">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {routes.map((route) => (
          <Button
            label={route.name}
            style={{ width: 200 }}
            onClick={() => navigate(route.route)}
          />
        ))}
      </div>
      <div>
        <PlayField />
      </div>
    </div>
  );
}
