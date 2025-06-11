import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './wedding-navbar';
import './home-page';
import './entry-page';
import './main.css';
import { HomePage } from './home-page';
import { EngagementPhotos } from './enagement-photos';
import { SchedulePage } from './schedule-page';

async function hash(input: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * The root of the application
 *
 */
@customElement('main-app')
export class MainApp extends LitElement {
  @state()
  private _isLoggedIn: boolean | null = null;

  @state()
  private _invitedEvents: Array<string> | 'all' = [];

  @state()
  private _currentHash: string = location.hash;

  private _onHashChange = () => {
    this._currentHash = location.hash;
  };

  connectedCallback() {
    super.connectedCallback();
    const firstAndLastName = localStorage.getItem('firstAndLast');
    if (firstAndLastName == null) {
      this._isLoggedIn = false;
      return;
    }
    const hashedNames: Record<string, Array<string> | 'all'> = {
      '9f424d960f9d13b30a5ca714c566fd7e23c2bf9bad6af9f56cdac6ac3ba2d7cf': 'all',
      '91035d246c53b319938341b25d8cdd123bde586df097f17d379f14d9f5405651': [
        'welcome-party',
        'wedding',
      ],
    };
    hash(firstAndLastName).then((hashed: string) => {
      this._isLoggedIn = Object.keys(hashedNames).includes(hashed);
      this._invitedEvents = hashedNames[hashed];
    });

    // For hash routing, unrelated to name hashing (lol)
    window.addEventListener('hashchange', this._onHashChange);
  }

  disconnectedCallback(): void {
    window.removeEventListener('hashchange', this._onHashChange);

    super.disconnectedCallback();
  }

  loggedInRoute(): LitElement {
    switch (this._currentHash) {
      case '#/not-logistics/engagement-photos':
        return new EngagementPhotos();
      case '#/schedule':
        const sched = new SchedulePage();
        sched.invitedEvents = this._invitedEvents;
        return sched;
      case '':
      case '#/home':
      default:
        // For unknown routes, just return home page without forcing redirect
        return new HomePage();
    }
  }
  render() {
    console.log(`isLoggedIn: ${this._isLoggedIn}`);
    if (this._isLoggedIn == null) {
      return;
    }
    this.classList.toggle('logged-in', this._isLoggedIn);

    if (!this._isLoggedIn) {
      history.replaceState(null, '', location.origin);
      return html`<entry-page class="fade-in"></entry-page>`;
    }
    return html`
      <span id="main-app">
        <wedding-navbar></wedding-navbar>
        <img
          id="fixed-background-image"
          src="/home-background.jpg"
          alt="Stylized watercolor image of Deer Park Villa set up for a wedding with altar"
        />
        ${this.loggedInRoute()}
      </span>
    `;
  }
  static styles = css`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    #fixed-background-image {
      position: fixed;
      inset: 0;
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      z-index: -1;
      animation: fadeIn 1s ease-in forwards;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp;
  }
}
