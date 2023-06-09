import { useNavigate } from 'react-router-dom';

import './MainMenu.css';
import Button from '../../components/Button/Button';

const routes = [
  {
    name: 'Jugar',
    route: '/play',
  },
  {
    name: 'Decks',
    route: '/decks',
  },
  {
    name: 'Todas las Cartas',
    route: '/cards',
  },
];

function MainMenu() {
  const navigate = useNavigate();

  const goToScreen = (route: string) => {
    navigate(route);
  };

  return (
    <div id="main-menu-container">
      {routes.map((route) => (
        <Button label={route.name} onClick={() => goToScreen(route.route)} />
      ))}
    </div>
  );
}

export default MainMenu;
