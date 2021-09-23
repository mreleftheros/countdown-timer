class UI {
  constructor() {
    this.main = document.getElementById("main");
    this.eventForm = document.getElementById("eventForm");
    this.timer = document.getElementById("timer");
  }
  renderTimer(event, d, h, m) {
    event = event[0].toUpperCase() + event.slice(1);
    d = d.length === 1 ? "0" + d : d;
    h = h.length === 1 ? "0" + h : h;
    m = m.length === 1 ? "0" + m : m;

    let html = `
      <span class="main__timer-container__timer__days">${d}</span> days, 
      <span class="main__timer-container__timer__hours">${h}</span> hours and 
      <span class="main__timer-container__timer__minutes">${m}</span> minutes before 
      <span class="main__timer-container__timer__event">${event}!</span>
    `;

    this.timer.innerHTML = html;
  }
  updateTheme(events, event) {
    events = events.map(event => event.name);

    for (let event of events) {
      this.main.classList.remove(event);
    }

    if (!event) {
      this.timer.innerHTML = "";
    }

    this.main.classList.add(event);
  }
}

const ui = new UI();

export default ui;