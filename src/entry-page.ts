import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { buttonStyles } from './styles.ts';

/**
 * The sign in page for the app
 *
 * @slot - This element has a slot
 */
@customElement('entry-page')
export class EntryPage extends LitElement {
  render() {
    const existingFirstAndLast = localStorage.getItem('firstAndLast');

    return html`
      <div class="content">
        <h1>Annie & Lucas</h1>
        <form @submit="${this._handleSubmit}">
          <label for="firstAndLast" class="centered-label">Enter your first & last name</label>
          <input id="firstAndLast" type="text" required />
          <button type="submit">Submit</button>
        </form>
        ${existingFirstAndLast
          ? html`
              <div class="error">
                Sorry, ${existingFirstAndLast} is not recognized.

                <br />
                Please try your nickname or formal name instead.
              </div>
            `
          : ''}
      </div>
    `;
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    this.classList.add('fade-out');
    const input = this.shadowRoot?.querySelector('#firstAndLast') as HTMLInputElement;
    localStorage.setItem('firstAndLast', input.value.toLowerCase());
    window.location.reload();
  }

  static localStyles = css`
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
    content {
      width: 30vw;
    }
    h1 {
      text-align: center;
      font-size: 4rem;
      font-weight: 1000;
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
      margin: 0 auto;
    }

    .error {
      text-align: center;
      padding: 1rem;
      background-color: #ab99af;
      border-radius: 8px;
      border: 3px solid #808080;
      margin: 1rem auto;
      color: #606060;
    }

    label {
      font-size: 2rem;
      text-align: center;
    }

    input {
      padding: 0.5rem;
      font-size: 1rem;
    }

    button {
      padding: 0.5rem;
      font-size: 1rem;
    }
    @media (max-width: 900px) {
      h1 {
        font-size: 2.5rem;
      }
      content {
        width: 60vw;
      }
    }
  `;
  static styles = [buttonStyles, EntryPage.localStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'entry-page': EntryPage;
  }
}
