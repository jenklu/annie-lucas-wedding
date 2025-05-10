import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./wedding-navbar";
import "./home-page";
import "./entry-page";
import "./main.css";
import { HomePage } from "./home-page";
import { EngagementPhotos } from "./enagement-photos";

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

  loggedInRoute(): LitElement {
    switch (location.pathname) {
      case "/engagement-photos":
        history.replaceState(null, "", location.origin + "/engagement-photos");
        return new EngagementPhotos();
      case "/":
      case "/home":
      default:
        history.pushState(null, "", location.origin + "/home");
        return new HomePage();
    }
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
    return html` <span id="main-app"> ${this.loggedInRoute()} </span> `;
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

    #main-app {
      display: block;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background-image: url(/home-background.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: background-image 2s;
      opacity: 0;
      animation: fadeIn 1s ease-in forwards;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "main-app": MainApp;
  }
}
