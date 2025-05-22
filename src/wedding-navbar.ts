import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './tooltip';

/**
 * The navbar for the app
 *
 * @slot - This element has a slot
 */
@customElement('wedding-navbar')
export class WeddingNavbar extends LitElement {
  render() {
    return html`
      <nav>
        <div class="nav-container">
          <ul class="nav-links nav-left">
            <li>
              <a id="home" href="#/home">Home</a>
            </li>
            <li>
              <lucas-tooltip text="Coming soon..."
                ><a href="${location.hash}">Bride & Groom</a></lucas-tooltip
              >
            </li>
            <li>
              <lucas-tooltip text="Coming soon..."
                ><a href="${location.hash}">Wedding Party</a></lucas-tooltip
              >
            </li>
            <li><a href="#/engagement-photos">Photos</a></li>
          </ul>

          <ul class="nav-links nav-right">
            <li>
              <lucas-tooltip text="Coming soon..."
                ><a href="${location.hash}">RSVP</a></lucas-tooltip
              >
            </li>
            <li>
              <lucas-tooltip text="Coming soon..."
                ><a href="${location.hash}">Travel Info</a></lucas-tooltip
              >
            </li>
            <li><a href="#/schedule">Schedule</a></li>
            <li>
              <lucas-tooltip text="Coming soon..."
                ><a href="${location.hash}">Registry</a></lucas-tooltip
              >
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  static styles = css`
    nav {
      padding: 10px 0;
    }

    .nav-container {
      margin: 2rem auto 2rem auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & a {
        text-decoration: none;
        color: white;
        font-size: 2.5rem;
      }
      & a:active {
        color: white;
      }
    }

    #home {
      border-radius: 5px;
      height: fit-content;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.3);
    }

    ul.nav-links {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex: 1;
      justify-content: space-evenly;
    }

    @media (max-width: 900px) {
      ul.nav-links {
        flex-direction: column;
        justify-content: space-between;
        gap: 1.5rem;
        display: flex;
        flex-grow: 0;
      }

      .nav-container {
        align-items: stretch;
        justify-content: space-between;
        width: 92vw;
        & a {
          text-decoration: none;
          color: white;
          font-size: 1.75rem;
        }
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'wedding-navbar': WeddingNavbar;
  }
}
