export class InsultManager {
  private insults: string[];

  constructor(defaultInsults: string[]) {
    const stored =
      typeof window !== 'undefined'
        ? localStorage.getItem('customInsults')
        : null;

    const custom = stored
      ? JSON.parse(stored)
      : [];

    this.insults = [
      ...defaultInsults,
      ...custom,
    ];
  }

  getRandomInsult() {
    return this.insults[
      Math.floor(
        Math.random() * this.insults.length
      )
    ];
  }

  addInsult(insult: string) {
    this.insults.unshift(insult);

    localStorage.setItem(
      'customInsults',
      JSON.stringify(this.insults)
    );
  }

  getAllInsults() {
    return this.insults;
  }
}