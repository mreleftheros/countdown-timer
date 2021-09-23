class Event {
  constructor() {
    this.events = [
      {name: "christmas", time: new Date("25 December 2021")},
      {name: "easter", time: new Date("24 April 2022")},
      {name: "summer", time: new Date("1 June 2022")}
    ]
    this.event;
    this.eventTime;
    let timer;
  }
  init(e) {
    this.setEvent(e);
    this.setEventTime();
  }
  setEvent(e) {
    this.event = e.target.value;
  }
  setEventTime() {
    this.eventTime = this.events.filter(event => event.name === this.event)[0].time;
  }
  startTimer() {

  }
}

export default Event;