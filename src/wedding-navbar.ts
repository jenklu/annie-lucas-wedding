import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * The navbar for the app
 *
 * @slot - This element has a slot
 */
@customElement("wedding-navbar")
export class WeddingNavbar extends LitElement {
  render() {
    return html`
      <nav>
        <div class="nav-container">
          <ul class="nav-links nav-left">
            <li><a href="#">Bride & Groom</a></li>
            <li><a href="#">Wedding Party</a></li>
            <li><a href="/engagement-photos">Photos</a></li>
          </ul>

          <ul class="nav-links nav-right">
            <li><a href="#">RSVP</a></li>
            <li><a href="#">Travel Info</a></li>
            <li><a href="#">Schedule</a></li>
          </ul>
        </div>
      </nav>
      <slot></slot>
    `;
  }

  static styles = css`
    nav {
      padding: 10px 0;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & a {
        text-decoration: none;
        color: white;
      }
    }

    ul.nav-links {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      font-size: 2.5rem;
    }

    #home-wrapper {
      text-align: center;
    }

    #home-wrapper a {
      font-size: 3.5rem;
      margin: 0 2rem;
    }

    @media (max-width: 900px) {
      ul.nav-links {
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        font-size: 2rem;
        display: flex;
        flex-grow: 0;
      }

      .nav-container {
        align-items: stretch;
        justify-content: space-between;
        width: 92vw;
        margin: auto;
      }

      #home-wrapper a {
        font-size: 2.5rem;
        margin: 0;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "wedding-navbar": WeddingNavbar;
  }
}
