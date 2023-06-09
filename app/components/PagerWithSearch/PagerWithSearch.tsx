import { Icons } from "../../constants";
import Input from "../Input/Input";
import "./PagerWithSearch.css";

export default function PagerWithSearch() {
  return (
    <div id="page-search-container">
      <button className="back-button" type="button">
        <img src={Icons.previous} alt="Ir atrás" />
      </button>
      <Input />
      <button
        className="back-button"
        type="button"
        style={{ margin: 0, marginLeft: 10 }}
      >
        <img src={Icons.forward} alt="Ir atrás" />
      </button>
    </div>
  );
}
