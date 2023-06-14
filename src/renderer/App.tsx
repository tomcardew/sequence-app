import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "../../app/modules/main-menu/MainMenu";
import "./App.css";
import Play from "../../app/modules/play/Play";
import Cards from "../../app/modules/cards/Cards";
import Decks from "../../app/modules/deck/Decks";
import Match from "../../app/modules/match/Match";

const router = createBrowserRouter([
  {
    path: "/index.html",
    element: <MainMenu />,
  },
  {
    path: "/play",
    element: <Play />,
  },
  {
    path: "/decks",
    element: <Decks />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/play/match",
    element: <Match />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
