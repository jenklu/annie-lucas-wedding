import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

@customElement('rsvp-page')
export class RSVPPage extends LitElement {
  render() {
    return html`
      <div class="page-container">
        <div class="rsvp-closed">
          <p>RSVPs are closed. We're excited to see everyone soon!</p>
        </div>
      </div>
    `;
  }

  static localStyles = css`
    .page-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      min-height: 70vh;
    }
    .rsvp-closed {
      margin: 0 auto;
      max-width: 800px;
      width: 100%;
      background-color: #ab99af;
      border-radius: 5px;
      padding: 2rem 1rem;
      text-align: center;
      box-sizing: border-box;
    }
    .rsvp-closed p {
      font-size: 2rem;
      margin: 0;
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
      .page-container {
        padding: 1rem;
      }
      .rsvp-closed {
        margin-top: 2vh;
      }
      .rsvp-closed p {
        font-size: 1.5rem;
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
