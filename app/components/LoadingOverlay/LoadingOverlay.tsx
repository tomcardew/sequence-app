import { Icons } from "../../constants";
import "./LoadingOverlay.css";

interface LoadingProps {
  fullHeight?: boolean;
}

export default function LoadingOverlay({ fullHeight }: LoadingProps) {
  return (
    <div
      id="loading-overlay-container"
      className={fullHeight ? "loading-overlay-full-height" : ""}
    >
      <img src={Icons.loading} alt="Cargando..." />
    </div>
  );
}
