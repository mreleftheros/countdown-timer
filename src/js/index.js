import UI from "./ui";
import Event from "./event";

const init = () => {
  const ui = new UI();
  const event = new Event();

  ui.eventForm.addEventListener("input", event.init);
};

document.addEventListener("DOMContentLoaded", init);