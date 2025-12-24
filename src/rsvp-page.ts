import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

@customElement('rsvp-page')
export class RSVPPage extends LitElement {
  render() {
    return html`
      <div class="page-container">
        <iframe class="rsvp-iframe" src="https://withjoy.com/annie-and-lucas-jun-26/rsvp"></iframe>
      </div>
    `;
  }

  static localStyles = css`
    .rsvp-iframe {
      margin-top: 5vh;
      width: 90vw;
      height: 75vh;
    }
    .page-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    #fixed-background-image {
      position: fixed;
      inset: 0;
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      z-index: -1;
      animation: fadeIn 1s ease-in forwards;
    }

    @media (max-width: 1270px) {
      .rsvp-iframe {
        margin-top: 2vh;
        height: 65vh;
      }
    }
  `;
  static styles = [RSVPPage.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'rsvp-page': RSVPPage;
  }
}
