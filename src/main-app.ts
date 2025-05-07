import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./wedding-navbar";
import "./entry-page";

async function hash(input: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * The root of the application
 *
 */
@customElement("main-app")
export class MainApp extends LitElement {
  @state()
  private _isLoggedIn: boolean | null = null;
  connectedCallback() {
    super.connectedCallback();
    const firstAndLastName = localStorage.getItem("firstAndLast");
    if (firstAndLastName == null) {
      this._isLoggedIn = false;
      return;
    }
    const hashedNames = [
      "9f424d960f9d13b30a5ca714c566fd7e23c2bf9bad6af9f56cdac6ac3ba2d7cf",
      "91035d246c53b319938341b25d8cdd123bde586df097f17d379f14d9f5405651",
    ];
    hash(firstAndLastName).then(
      (hashed: string) => (this._isLoggedIn = hashedNames.includes(hashed))
    );
  }
  render() {
    console.log(`isLoggedIn: ${this._isLoggedIn}`);
    if (this._isLoggedIn == null) {
      return;
    }
    this.classList.toggle("logged-in", this._isLoggedIn);

    if (!this._isLoggedIn) {
      history.replaceState(null, "", location.origin);
      return html`<entry-page class="fade-in"></entry-page>`;
    }
    return html` <wedding-navbar></wedding-navbar>
      <span id="wedding-info" class="fade-in">
        <h1>Annie Thornton & Lucas Jenkins</h1>
        <h4>June 20, 2026</h4>
        <h4>Deer Park Villa, Fairfax, California</h4>
      </span>`;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }

    .fade-in {
      opacity: 0;
      animation: fadeIn 1s ease-in forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    :host(.logged-in) {
      background-image: url(/home-background.png);
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "main-app": MainApp;
  }
}
