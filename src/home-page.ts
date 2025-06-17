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
    return html` <dialog id="venue-dialog">
        <div>
          <p>
            Annie's great-grandparents, Joe and Antoinette Ghiringhelli, held their wedding
            reception at Deer Park Villa. At the reception, Joe promised to eventually buy the
            property for Antoinette. In 1937, he fulfilled his promise and Deer Park Villa has been
            run by the Ghiringhelli family ever since.
          </p>
          <p>
            Annie’s grandfather, Harry, lived most of his life on the property and ran Deer Park
            with his siblings. Annie’s mother, Joey, grew up on the property. Annie herself spent
            much of her childhood being watched by her Grandma Jackie at Deer Park while her parents
            were at work in Novato.
          </p>
          <p>
            For many years, Deer Park was open daily as an Italian restaurant. Today, the property
            is primarily a wedding venue, where couples are married under the redwood trees planted
            by Grandpa Joe almost 90 years ago. It is run by Annie’s cousin Mike and his sons,
            representing the 3rd and 4th generation of Ghiringhelli’s to do so.
          </p>
          <p>We are so excited to share this special place with all of our loved ones.</p>
          <button
            style="font-size: 1.5rem"
            @click="${() => {
              const dialog = this.shadowRoot?.getElementById(
                'venue-dialog'
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
                'venue-dialog'
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

    p {
      font-size: 1.5rem;
    }
    #venue-dialog {
      padding: 2rem;
      max-width: 600px;
      text-align: center;
      border-radius: 5px;
    }

    @media (max-width: 900px) {
      #venue-dialog {
        padding: 1rem;
        max-width: 85vw;
      }
      #wedding-info {
        height: auto;
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
