const INTERVAL = 3000;

const notify = () => fetch('http://example.com', {
  method: 'POST',
});

export default class Ping {
  constructor() {
    this.interval = setInterval(notify, INTERVAL);
  }

  stop() {
    clearInterval(this.interval);
  }
}
