import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import cv_url from 'url:./assets/joshua_yang_cv_spring_2025.pdf';

@customElement('index-page')
export class HelloWorld extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 16px;
            color: var(--hello-world-text-color, black);
            font-family: sans-serif;
        }

        .container {
            position: absolute;
            top: 66.67%;
            right: 10%;
            transform: translateY(-50%);
            padding: 16px;
            text-align: right;
        }

        h1 {
            font-family: Wulkan Display Bold;
            font-size: 4rem;
        }
    `;

    render() {
        return html`<div class="container">
            <h1>Joshua Yang</h1>
            <p>Contact: <a href="mailto:joshua_yang@brown.edu">joshua_yang@brown.edu</a></p>
            <p><a href="${cv_url}">Curriculum Vitae</a></p>
            <footer>
                <p>&copy; 2025 Joshua Yang. All rights reserved.</p>
            </footer>
        </div>`;
    }
}