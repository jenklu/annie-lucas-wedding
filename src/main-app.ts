import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * The root of the application
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("main-app")
export class MainApp extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <nav>
        <div class="nav-container">
          <ul class="nav-links nav-left">
            <li><a href="#">Travel Info</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">RSVP</a></li>
          </ul>
          <div id="home-wrapper">
            <a href="#">Home</a>
          </div>
          <ul class="nav-links nav-right">
            <li><a href="#">Bride & Groom</a></li>
            <li><a href="#">Wedding Party</a></li>
            <li><a href="#">Photos</a></li>
          </ul>
        </div>
      </nav>
      <slot></slot>
    `;
  }

  static styles = css`
    :host {
      display: block;
      background-image: url(/background.png);
      background-size: cover; //auto 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #d6b4d1;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }

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

    @media (max-width: 900px) {
      ul.nav-links {
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        font-size: 2rem;
        display: flex;
      }

      .nav-container {
        padding: 0 1rem;
        align-items: stretch;
      }
      #home-wrapper a {
        font-size: 2.5rem;
      }
    }

    #home-wrapper {
      text-align: center;
    }

    #home-wrapper a {
      font-size: 3.5rem;
      margin: 0 2rem;
    }

    div.nav-container a {
      text-decoration: none;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "main-app": MainApp;
  }
}
