import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { paragraphStyle } from './styles';

interface EventInfo {
  slug: string;
  title: string;
  arrivalTime?: string;
  time: string;
  date: string;
  dressCode?: string | ReturnType<typeof html>;
  location: string | ReturnType<typeof html>;
  notes?: string;
}

@customElement('schedule-page')
export class SchedulePage extends LitElement {
  @property({ type: Array })
  invitedEvents: Array<string> = ['wedding'];

  private static allEvents: EventInfo[] = [
    {
      slug: 'rehearsal-dinner',
      title: 'Rehearsal Dinner',
      time: '5:00 PM',
      date: 'Friday June 19th, 2026',
      location: html`<a
        href="https://maps.app.goo.gl/xtaCnqyPnZcxYXTa8"
        target="_blank"
        rel="noopener noreferrer"
        >San Rafael Joe's</a
      >`,
      dressCode: 'Dressy Casual',
    },
    {
      slug: 'welcome-party',
      title: 'Welcome Party',
      time: '8:00 - 10:30 PM',
      date: 'Friday June 19th, 2026',
      location: html`<a
        href="https://maps.app.goo.gl/nH6NU7JG9bDtbkRj9"
        target="_blank"
        rel="noopener noreferrer"
        >Pond Farm Brewing, San Rafael</a
      >`,
      notes: `We're excited to host our out-of-town guests for drinks and light bites`,
      dressCode: 'Casual',
    },
    {
      slug: 'wedding',
      title: 'Wedding',
      time: 'Promptly at 4:00 PM',
      date: 'Saturday June 20th, 2026',
      location: html`<a
        href="https://maps.app.goo.gl/6dA7DkMBPako2Hr58"
        target="_blank"
        rel="noopener noreferrer"
        >Deer Park Villa, Fairfax</a
      >`,
      dressCode: html`Garden Formal – see the
        <a href="/#/dress-code" target="_blank">Dress Code page</a> for details`,
      notes: 'Buses will depart the AC Hotel San Rafael at 3:15 PM. Venue opens at 3:30 PM',
    },
    {
      slug: 'after-party',
      title: 'Wedding After-Party',
      time: 'Late Night',
      date: 'Saturday June 20th, 2026',
      location: html`<a
        href="https://maps.app.goo.gl/k9dsiEf2DQaChoxSA"
        target="_blank"
        rel="noopener noreferrer"
        >Mac's at 19 Broadway, Fairfax</a
      > `,
      notes: `There will be a bus from Deer Park to Mac's for those interested`,
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
                <!--${event.arrivalTime &&
                html`<p><strong>Arrival Time:</strong> ${event.arrivalTime}</p>`}-->
                <p class="date-time desktop">${event.time}, ${event.date}</p>
                <p class="date-time mobile">${event.time}</p>
                <p class="date-time mobile">${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                ${event.dressCode && html`<p><strong>Dress Code:</strong> ${event.dressCode}</p>`}
                ${event.notes && html`<p><strong>Note:</strong> ${event.notes}</p>`}
              </div>
            `
          )}
      </section>
    `;
  }

  static localStyles = css`
    section {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      padding: 2rem;
      border-radius: 12px;
    }

    .event p.date-time {
      font-size: 2rem;
    }
    .event p.date-time.mobile {
      display: none;
    }

    @media (max-width: 1270px) {
      .event p.date-time.desktop {
        display: none;
      }
      .event p.date-time.mobile {
        display: block;
      }
      section {
        padding: 1rem;
      }
    }

    .event {
      margin-bottom: 1.5rem;
      background-color: #ab99af;
      border-radius: 5px;
      padding: 1rem;
    }

    .event h3 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 3rem;
    }

    .event p {
      font-size: 1.5rem;
      margin: 0.3rem 0;
    }

    .event strong {
      font-weight: 700;
    }
  `;
  static styles = [SchedulePage.localStyles, paragraphStyle];
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-page': SchedulePage;
  }
}
