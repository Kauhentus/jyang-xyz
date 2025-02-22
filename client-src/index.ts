import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 16px;
            color: var(--hello-world-text-color, black);
        }

        .container {
            position: absolute;
            top: 66.67%;
            right: 10%;
            transform: translateY(-50%);
            padding: 16px;
        }
    `;

    render() {
        return html`<div class="container">
            <h1>Joshua Yang</h1>
            <p>A final home for illustrators, designers, and all creatives.</p>
            <p>Building the future of creativity and design tooling.</p>
            <p>Contact: <a href="mailto:info@asunder.co">info@asunder.co</a></p>
            <footer>
                <p>&copy; 2025 Asunder Labs. All rights reserved.</p>
            </footer>
        </div>`;
    }
}

document.body.innerHTML = '<hello-world></hello-world>';