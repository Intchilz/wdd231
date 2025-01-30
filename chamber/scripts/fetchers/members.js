export class Members {
  static async get() {
    const URL = 'https://Intchilz.github.io/wdd231/chamber/data/members.json';

    const response = await fetch(URL);

    /** @type {Member[]} */
    const data = await response.json();
    return data;
  }
}
