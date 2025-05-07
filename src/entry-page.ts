import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * The sign in page for the app
 *
 * @slot - This element has a slot
 */
@customElement("entry-page")
export class EntryPage extends LitElement {
  render() {
    const existingFirstAndLast = localStorage.getItem("firstAndLast");

    return html`
      <div class="content">
        <form @submit="${this._handleSubmit}">
          <label for="firstAndLast" class="centered-label"
            >Enter your first and last name</label
          >
          <input id="firstAndLast" type="text" required />
          <button type="submit">Submit</button>
        </form>
        ${existingFirstAndLast
          ? html`
              <div class="error">
                Sorry, the name ${existingFirstAndLast} is not recognized
              </div>
            `
          : ""}
      </div>
    `;
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    this.classList.add("fade-out");
    setTimeout(() => {
      const input = this.shadowRoot?.querySelector(
        "#firstAndLast"
      ) as HTMLInputElement;
      localStorage.setItem("firstAndLast", input.value.toLowerCase());
      window.location.reload();
    }, 2000);
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-image: url(/entry-background.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin: 0;
      padding: 0;
      transition: background-image 2s;
    }

    .fade-out {
      opacity: 1;
      animation: fadeOut 2s ease-out forwards;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    form {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 30vw;
      margin: 0 auto;
    }

    .error {
      text-align: center;
      padding: 1rem;
      background-color: #ab99af;
      border-radius: 8px;
      border: 3px solid #808080;
      width: 30vw;
      margin: 1rem auto;
      color: #606060;
    }

    label {
      font-size: 1.2rem;
      text-align: center;
    }

    input {
      padding: 0.5rem;
      font-size: 1rem;
    }

    button {
      padding: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      font-family: inherit;
    }
    @media (max-width: 900px) {
      form {
        width: 60vw;
      }
      label {
        width: 60vw;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "entry-page": EntryPage;
  }
}
