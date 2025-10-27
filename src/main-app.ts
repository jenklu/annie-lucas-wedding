import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './wedding-navbar';
import './home-page';
import './entry-page';
import './main.css';
import { HomePage } from './home-page';
import { EngagementPhotos } from './enagement-photos';
import { SchedulePage } from './schedule-page';
import { GettingThere } from './getting-there';
import { WeddingPartyPage } from './wedding-party-page';
import { BrideAndGroom } from './bride-and-groom';
import { LodgingPage } from './lodging-page';
import { hashName, hashedNames } from './guest-name-validation';
import { DressCode } from './dress-code-faq';

/**
 * The root of the application
 *
 */
@customElement('main-app')
export class MainApp extends LitElement {
  @state()
  private _isLoggedIn: boolean | null = null;

  @state()
  private _invitedEvents: Array<string> = [];

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

    hashName(firstAndLastName).then((hashed: string) => {
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
      case '#/people-and-pics/wedding-party':
        const weddingParty = new WeddingPartyPage();
        requestAnimationFrame(() => {
          weddingParty.scrollToAltarCenter();
        });
        return weddingParty;
      case '#/people-and-pics/engagement-photos':
        return new EngagementPhotos();
      case '#/people-and-pics/bride-and-groom':
        return new BrideAndGroom();
      case '#/schedule':
        const sched = new SchedulePage();
        sched.invitedEvents = this._invitedEvents;
        return sched;
      case '#/travel/getting-there':
        return new GettingThere();
      case '#/travel/lodging':
        return new LodgingPage();
      case '#/dress-code':
        return new DressCode();
      case '':
      case '#/home':
      default:
        // For unknown routes, just return home page without forcing redirect
        return new HomePage();
    }
  }
  render() {
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
        ${this._currentHash !== '#/people-and-pics/wedding-party'
          ? html`
              <img
                id="fixed-background-image"
                src="/home-background.jpg"
                alt="Stylized watercolor image of Deer Park Villa set up for a wedding with altar"
              />
            `
          : ''}
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
