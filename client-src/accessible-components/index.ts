import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('accessible-components')
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
            <h1>Accessible Components</h1>
        </div>`;
    }
}