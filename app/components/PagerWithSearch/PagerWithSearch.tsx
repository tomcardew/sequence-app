import { Icons } from "../../constants";
import { IconButton } from "../Buttons";
import Input from "../Input/Input";
import "./PagerWithSearch.css";

export default function PagerWithSearch() {
  return (
    <div id="page-search-container">
      <IconButton icon={Icons.previous} />
      <Input />
      <IconButton icon={Icons.forward} />
    </div>
  );
}
