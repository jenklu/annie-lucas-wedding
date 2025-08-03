import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface EventInfo {
  slug: string;
  title: string;
  time: string;
  location: string | ReturnType<typeof html>;
}

@customElement('schedule-page')
export class SchedulePage extends LitElement {
  @property({ type: Array })
  invitedEvents: Array<string> = ['wedding'];

  private static allEvents: EventInfo[] = [
    {
      slug: 'rehearsal-dinner',
      title: 'Rehearsal Dinner',
      time: 'TBA early evening, Friday June 19th, 2026',
      location: 'TBA, San Rafael',
    },
    {
      slug: 'welcome-party',
      title: 'Welcome Party',
      time: 'TBA evening, Friday June 19th, 2026',
      location: 'TBA, San Rafael',
    },
    {
      slug: 'wedding',
      title: 'Wedding',
      time: 'TBA, Saturday June 20th, 2026',
      location: html`<a
        href="https://maps.app.goo.gl/6dA7DkMBPako2Hr58"
        target="_blank"
        rel="noopener noreferrer"
        >Deer Park Villa, Fairfax</a
      >`,
    },
    {
      slug: 'after-party',
      title: 'Wedding After-Party',
      time: 'Late Night, Saturday June 20th, 2026',
      location: html`<a
          href="https://maps.app.goo.gl/k9dsiEf2DQaChoxSA"
          target="_blank"
          rel="noopener noreferrer"
          >Mac's at 19 Broadway, Fairfax</a
        >.
        <br />
        NOTE: There will be a bus from Deer Park to Mac's for those interested`,
    },
    // {
    //   slug: 'brunch',
    //   title: 'Brunch',
    //   time: 'TBA Late Morning, Sunday June 21st, 2026',
    //   location: 'TBA, San Rafael',
    // },
  ];

  render() {
    return html`
      <section>
        ${SchedulePage.allEvents
          .filter((event) => this.invitedEvents.includes(event.slug))
          .map(
            (event) => html`
              <div class="event">
                <h3>${event.title}</h3>
                <strong>Time:</strong> ${event.time}<br />
                <strong>Location:</strong> ${event.location}
              </div>
            `
          )}
      </section>
    `;
  }

  static styles = css`
    section {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      padding: 2rem;
      border-radius: 12px;
    }

    .event {
      margin-bottom: 3rem;
      background-color: #ab99af;
      border-radius: 5px;
      padding: 1rem 0;
    }

    .event h3 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 3rem;
    }

    .event p {
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0.3rem 0;
    }

    .event strong {
      text-decoration: underline;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-page': SchedulePage;
  }
}
