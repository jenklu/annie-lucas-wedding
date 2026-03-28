import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './wedding-navbar';
import { buttonStyles, paragraphStyle } from './styles.ts';
import './main.css';

/**
 * The root of the application
 *
 */
@customElement('home-page')
export class HomePage extends LitElement {
  render() {
    return html`<dialog id="venue-dialog">
        <div class="dialog-container">
          <button class="close-x" @click="${this.closeVenueDialog}" aria-label="Close">❌</button>
          <div class="dialog-content">
            <p>
              Annie's great-grandparents, Joe and Antoinette Ghiringhelli, held their wedding
              reception at Deer Park Villa. At the reception, Joe promised to eventually buy the
              property for Antoinette. In 1937, he fulfilled his promise and Deer Park Villa has
              been run by the Ghiringhelli family ever since.
            </p>
            <p>
              Annie's grandfather, Harry, lived most of his life on the property and ran Deer Park
              with his siblings. Annie's mother, Joey, also grew up on the property. Annie herself
              spent much of her childhood being watched by her Grandma Jackie at Deer Park while her
              parents were at work in Novato.
            </p>
            <p>
              For many years, Deer Park was open daily as an Italian restaurant. Today, the property
              is primarily a wedding venue, where couples are married under the redwood trees
              planted by Grandpa Joe almost 90 years ago. It is run by Annie's cousin Mike and his
              sons, representing the 3rd and 4th generation of Ghiringhelli's to do so.
            </p>
            <p>We are so excited to share this special place with all of our loved ones.</p>
          </div>
          <div class="dialog-actions">
            <button style="font-size: 1.5rem" @click="${this.closeVenueDialog}">Close</button>
          </div>
        </div>
      </dialog>
      <span id="wedding-info" class="fade-in">
        <h1>Annie Thornton & Lucas Jenkins</h1>
        <h4>June 20, 2026</h4>
        <h4>
          <button
            id="venue-button"
            type="button"
            aria-label="Read the story of Deer Park Villa"
            @click="${this.showVenueDialog}"
          >
            Deer Park Villa
          </button>
          <br />
          Fairfax, California
        </h4>
      </span>`;
  }

  showVenueDialog = () => {
    const dialog = this.shadowRoot?.getElementById('venue-dialog') as HTMLDialogElement | null;
    if (dialog) {
      dialog.showModal();
      // Scroll to top of the dialog content
      const content = dialog.querySelector('.dialog-content') as HTMLElement | null;
      if (content) content.scrollTop = 0;
    }
  };

  closeVenueDialog = () => {
    const dialog = this.shadowRoot?.getElementById('venue-dialog') as HTMLDialogElement | null;
    dialog?.close();
  };

  static localStyles = css`
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

    /* Reads as a tappable control on the hero photo, not just heading text */
    #venue-button {
      border: 1px solid rgba(255, 255, 255, 0.95);
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.28),
        0 1px 2px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition:
        box-shadow 0.2s ease,
        transform 0.15s ease;
    }

    #venue-button:hover {
      box-shadow:
        0 5px 14px rgba(0, 0, 0, 0.35),
        0 2px 6px rgba(0, 0, 0, 0.22);
      transform: translateY(-1px);
    }

    #venue-button:active {
      transform: translateY(0);
      box-shadow:
        0 1px 4px rgba(0, 0, 0, 0.3),
        inset 0 1px 2px rgba(0, 0, 0, 0.12);
    }

    #venue-button:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 3px;
    }

    p {
      font-size: 1.5rem;
    }
    #venue-dialog {
      padding: 0;
      max-width: 600px;
      text-align: center;
      border-radius: 5px;
    }
    .dialog-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 60vh;
      position: relative;
    }
    .close-x {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      padding: 0;
      background: transparent;
      border: none;
      font-size: 1.5rem;
      z-index: 2;
      filter: grayscale(100%);
    }
    .dialog-content {
      flex: 1 1 auto;
      overflow-y: auto;
      padding: 0rem 1.5rem 0rem 1.5rem;
      margin-top: 0.5rem;
    }
    .dialog-actions {
      flex-shrink: 0;
      padding: 1rem 0 1rem 0;
      background: none;
      display: flex;
      justify-content: center;
      border-top: 1px solid #eee;
    }
    @media (max-width: 900px) {
      #venue-dialog {
        padding: 0;
        max-width: 85vw;
      }
      #wedding-info {
        height: auto;
      }
      .dialog-content {
        padding: 0.5rem 0.5rem 0rem 0.5rem;
      }
    }
  `;
  static styles = [buttonStyles, paragraphStyle, HomePage.localStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage;
  }
}
