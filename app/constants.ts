import BackIcon from "../assets/icons/back.png";
import AttackIcon from "../assets/icons/attack.png";
import HeartIcon from "../assets/icons/heart.png";
import ActionIcon from "../assets/icons/action.png";
import NextIcon from "../assets/icons/next.png";
import SlotsIcon from "../assets/icons/slots.png";
import EffectIcon from "../assets/icons/effect.png";
import UpgradeIcon from "../assets/icons/upgrade.png";
import EnergyIcon from "../assets/icons/energy.png";
import LoadingIcon from "../assets/icons/loading.png";
import PreviousIcon from "../assets/icons/previous.png";
import ForwardIcon from "../assets/icons/forward.png";

import CardFront from "../assets/cards/front.png";
import CardBack from "../assets/cards/back.png";

const Icons = {
  back: BackIcon,
  attack: AttackIcon,
  heart: HeartIcon,
  action: ActionIcon,
  next: NextIcon,
  slots: SlotsIcon,
  effect: EffectIcon,
  upgrade: UpgradeIcon,
  energy: EnergyIcon,
  loading: LoadingIcon,
  previous: PreviousIcon,
  forward: ForwardIcon,
};

const CardDefaults = {
  back: CardBack,
  front: CardFront,
};

export interface NavigationMenuOption {
  label: string;
  onClick?: () => void;
}

interface NavigationProps {
  title?: string;
  hideBackButton?: boolean;
  invisible?: boolean;
}

const RouteNavigationOptions: { [key: string]: NavigationProps } = {
  "/index.html": {
    hideBackButton: true,
    title: undefined,
  },
  "/play": {
    hideBackButton: false,
    title: "Jugar",
  },
  "/cards": {
    hideBackButton: false,
    title: "Todas las cartas",
  },
  "/decks": {
    hideBackButton: false,
    title: "Todos tus decks",
  },
  "/play/match": {
    hideBackButton: false,
    invisible: true,
  },
};

export { Icons, CardDefaults, RouteNavigationOptions, NavigationProps };
