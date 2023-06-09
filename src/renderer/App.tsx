import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainMenu from '../../app/modules/main-menu/MainMenu';
import './App.css';
import Play from '../../app/modules/play/Play';
import Cards from '../../app/modules/cards/Cards';

const router = createBrowserRouter([
  {
    path: '/index.html',
    element: <MainMenu />,
  },
  {
    path: '/play',
    element: <Play />,
  },
  {
    path: '/decks',
    element: <Play />,
  },
  {
    path: '/cards',
    element: <Cards />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
