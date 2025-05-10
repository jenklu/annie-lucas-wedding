import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./wedding-navbar";
import "./entry-page";
import "./main.css";

/**
 * The root of the application
 *
 */
@customElement("home-page")
export class HomePage extends LitElement {
  render() {
    return html` <wedding-navbar></wedding-navbar>
      <dialog id="venue-dialog">
        <div>
          <p>
            Annie's great grandfather bought Deer Park Villa for her great
            grandmother 88 years ago. It has been run by her family ever since,
            for many years as an Italian restaurant and now as a wedding venue.
          </p>
          <p>
            Her grandfather ran the restaurant for many years and lived his
            whole life in a house on the property. Annie's mother was born and
            raised at Deer Park. Annie spent many years running around with
            Fairfax kids at Deer Park while her parents were at work in Novato.
          </p>
          <p>
            Her Cousin Mike still runs the property as a wedding venue and
            brings the family together for a big Thanksgiving meal every year.
          </p>
          <button
            style="font-size: 1.5rem"
            @click="${() => {
              const dialog = this.shadowRoot?.getElementById(
                "venue-dialog"
              ) as HTMLDialogElement | null;
              dialog?.close();
            }}"
          >
            Close
          </button>
        </div>
      </dialog>
      <span id="wedding-info" class="fade-in">
        <h1>Annie Thornton & Lucas Jenkins</h1>
        <h4>June 20, 2026</h4>
        <h4>
          <button
            id="venue-button"
            @click="${() => {
              const dialog = this.shadowRoot?.getElementById(
                "venue-dialog"
              ) as HTMLDialogElement | null;
              dialog?.showModal();
            }}"
          >
            Deer Park Villa
          </button>
          <br />
          Fairfax, California
        </h4>
      </span>`;
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

    :host {
      background-image: url(/home-background.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: background-image 2s;
      opacity: 0;
      animation: fadeIn 1s ease-in forwards;
    }

    #wedding-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 80vh;
    }

    #wedding-info h1 {
      font-size: 4rem;
      margin: 0;
    }

    #wedding-info h4 {
      font-size: 2rem;
      margin: 0.5rem 0;
    }

    button {
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      background-color: #ab99af;
      border-radius: 5px;
      border: none;
      padding: 0.2em 0.5em;
      cursor: pointer;
    }
    p {
      font-size: 1.5rem;
    }
    #venue-dialog {
      padding: 2rem;
      max-width: 600px;
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": HomePage;
  }
}
