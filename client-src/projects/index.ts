import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import logo_daniel from 'url:../assets/homepage-imgs/logo_daniel.jpg';
import logo_printers from 'url:../assets/homepage-imgs/logo_printers.jpg';
import logo_vidstr from 'url:../assets/homepage-imgs/logo_vidstr.jpg';
import logo_warp from 'url:../assets/homepage-imgs/logo_warp.jpg';

const css_resets = css`
    /**************/
    /* CSS RESETS */
    /**************/

    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

@customElement('projects-page')
export class HelloWorld extends LitElement {
    static styles = [
        css_resets,
        css` :host {
            display: block;
            padding: 16px;
            color: var(--hello-world-text-color, black);
            font-family: sans-serif;

            min-height: 100%;
            height: 100%;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        nav {
            width: fit-content;
        }
        .nav-item {
            font-family: Wulkan Display Bold;
            text-decoration: none;
            color: black;
            font-size: 1.5rem;
        }
        @media (max-width: 700px) {
            nav {
                margin-top: 0rem;
            }
            .nav-item {
                margin-top: 1rem;
                margin-left: 1rem;
                margin-right: 1rem;
            }
        }
        @media (min-width: 700px) {
            nav {
                margin-top: 2rem;
                margin-left: auto;
                margin-right: 2rem;
            }
            .nav-item {
                margin-left: 3rem;
            }
        }

        .hero-title {
            font-family: Wulkan Display Bold;
            font-size: 4rem;
            margin-top: 4rem;
            margin-bottom: 2rem;
            width: 100%;
            text-align: center;
        }

        .research-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 45rem;
            margin-left: 3rem;
            margin-bottom: 3rem;
        }
        @media(max-width: 700px) {
            .research-item {
                width: 90%;
            }
        }

        .img-wrapper {
            width: 12rem;
            margin-right: 2rem;

            height: fit-content;
            overflow: hidden;
            border: 1px solid black;
        }

        .img-teaser {
            width: 100%;
        }

        .text-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .text-title {
            font-family: Wulkan Text Bold;
            font-size: 2rem;
            line-height: 1.1;
            margin-bottom: 0.5rem;
        }

        .text-pub, .text-link {
            font-family: sans-serif;
            font-size: 1rem;
        }

        footer {
            font-family: Wulkan Text Regular;
            font-size: 1.25rem;
            margin-top: 8rem;
            margin-bottom: 2rem;
        }
    `];

    render() {
        return html`<div class="container">
            <nav>
                <ul style="display: flex; flex-direction: row; ">
                    <div>
                    <a class="nav-item" href="/">About</a>
                    <a class="nav-item" href="/research">Research</a>
                    </div>
                    <div>
                    <a class="nav-item" href="/projects">Projects</a>
                    <a class="nav-item" href="/art-portfolio">Art</a>
                    </div>
                </ul>
            </nav>
            
            <div class="">
                <div class="hero-title">Project Portfolio</div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <a href="/iterative-design" target="_blank">
                            <img class="img-teaser" src="${logo_vidstr}">
                        </a>
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">VidSTR: Video Comp Retargeting</div>
                        <div class="text-pub">Adobe Research / Brown HCI</div>
                        <div class="text-link">Automating video editing through intelligent composition retargeting</div>
                    </div>
                </div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <a href="/iterative-design" target="_blank">
                            <img class="img-teaser" src="${logo_warp}">
                        </a>
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">Warp Community</div>
                        <div class="text-pub">Warp AI / Brown CS 1300</div>
                        <div class="text-link">Designing Warp Community to augment the Warp Terminal</div>
                    </div>
                </div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <a href="/responsive-redesign" target="_blank">
                            <img class="img-teaser" src="${logo_daniel}">
                        </a>
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">Responsive Redesign</div>
                        <div class="text-pub">Brown CS 1300</div>
                        <div class="text-link">Product page redesign for DANIEL SMITH's 5ml watercolor line</div>
                    </div>
                </div>

                <div class="research-item"> 
                    <div class="img-wrapper">
                        <a href="/personas-storyboarding" target="_blank">
                            <img class="img-teaser" src="${logo_printers}">
                        </a>
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">Personas and Storytelling</div>
                        <div class="text-pub">Brown CS 1300</div>
                        <div class="text-link">Developing personas for Ricoh campus printer interfaces</div>
                    </div>
                </div>
            </div>

            <footer>
                <p>Made with ❤️ in Providence</p>
            </footer>
        </div>`;
    }
}