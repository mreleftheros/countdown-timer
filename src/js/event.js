import ui from "./ui";

class Event {
  constructor() {
    this.events = [
      {name: "christmas", time: new Date("25 December 2021")},
      {name: "easter", time: new Date("24 April 2022")},
      {name: "summer", time: new Date("1 June 2022")}
    ];
    this.event;
    this.eventTime;
    this.timer;
  }
  init(e) {
    this.setEvent(e);

    if (!this.event) { // check
      this.reset();
      return;
    }

    this.setEventTime();
    ui.updateTheme(this.events, this.event);
    this.startTimer();
  }
  reset() {
    this.setEventTime = null;
    clearInterval(this.timer);
    ui.updateTheme(this.events, null);
  }
  setEvent(e) {
    this.event = e.target.value;
  }
  setEventTime() {
    this.eventTime = this.events.filter(event => event.name === this.event)[0].time;
  }
  startTimer() {
    this.timer = setInterval(() => {
      const today = Date.now();
      const diff = this.eventTime.getTime() - today;
      
      let minutes = diff / 1000 / 60;
      let hours = minutes / 60;
      let days = hours / 24;

      const minutesString = String(Math.floor(minutes) % 60);
      const hoursString = String(Math.floor(hours) % 24);
      const daysString = String(Math.floor(days));

      ui.renderTimer(this.event, daysString, hoursString, minutesString);
    }, 1000)
  }
}

export default Event;