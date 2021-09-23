import ui from "./ui";
import Event from "./event";

const init = () => {
  const event = new Event();

  ui.eventForm.addEventListener("input", e => event.init(e));
};

document.addEventListener("DOMContentLoaded", init);