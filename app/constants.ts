/* eslint-disable prettier/prettier */

import BackIcon from "../assets/icons/back.png";
import AttackIcon from "../assets/icons/attack.png";
import HeartIcon from "../assets/icons/heart.png";
import ActionIcon from "../assets/icons/action.png";
import NextIcon from "../assets/icons/next.png";
import SlotsIcon from "../assets/icons/slots.png";
import EffectIcon from "../assets/icons/effect.png";
import UpgradeIcon from "../assets/icons/upgrade.png";
import EnergyIcon from "../assets/icons/energy.png";

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
};

interface NavigationProps {
  title?: string;
  hideBackButton?: boolean;
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
};

export { Icons, RouteNavigationOptions, NavigationProps };
