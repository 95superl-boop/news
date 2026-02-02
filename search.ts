
/**
 * Search Module
 * Real-time suggestions and search history.
 */

export class SearchSystem {
  private input: HTMLInputElement | null;
  private historyKey = 'th_search_history';

  constructor(inputSelector: string) {
    this.input = document.querySelector(inputSelector);
    this.bindEvents();
  }

  private bindEvents() {
    if (!this.input) return;

    this.input.addEventListener('input', this.debounce(() => {
      this.getSuggestions(this.input?.value || '');
    }, 300));
  }

  private async getSuggestions(query: string) {
    if (query.length < 2) return;
    
    // WordPress integration placeholder
    // const response = await fetch(`/wp-json/wp/v2/posts?search=${query}`);
    console.log(`Searching for: ${query}`);
  }

  public saveToHistory(query: string) {
    let history = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
    if (!history.includes(query)) {
      history.unshift(query);
      localStorage.setItem(this.historyKey, JSON.stringify(history.slice(0, 5)));
    }
  }

  private debounce(func: Function, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
}
