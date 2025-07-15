import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

@customElement('wedding-party-card')
export class WeddingPartyCard extends LitElement {
  @property({ type: String }) name = '';
  @property({ type: String }) title = '';
  @property({ type: String }) headshot = '';
  @property({ type: Object })
  description: ReturnType<typeof html> = html``;
  render() {
    return html`
      <div class="card-container">
        <div class="name-title">
          <h2>${this.name}</h2>
          <h3>${this.title}</h3>
        </div>
        <div class="headshot-wrapper">
          <img class="headshot" src="${this.headshot}" alt="${this.name} headshot" />
        </div>
        <div class="description">${this.description}</div>
      </div>
    `;
  }

  static localStyles = css`
    .card-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 25vw;
      height: 100%;
      margin: 0 2vw;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      padding: 1.2vw 0.5vw 0.5vw 0.5vw;
      box-sizing: border-box;
    }
    .name-title {
      text-align: center;
    }
    .name-title h2 {
      margin: 0;
    }
    .name-title h3 {
      margin: 0;
      font-weight: 400;
    }
    .headshot-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 0.7vw;
    }
    .headshot {
      width: 10vw;
      height: 10vw;
      object-fit: cover;
      border-radius: 50%;
      background: #6cf;
      border: 0.3vw solid #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .description {
      width: 100%;
      overflow-y: scroll;
    }
    .description p {
      text-align: center;
      margin: 0;
      line-height: 1.5;
    }
    @media (max-width: 1270px) {
      .card-container {
        width: 70vw;
      }
      .headshot {
        width: 15vw;
        height: 15vw;
      }
    }
  `;
  static styles = [WeddingPartyCard.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'wedding-party-card': WeddingPartyCard;
  }
}
