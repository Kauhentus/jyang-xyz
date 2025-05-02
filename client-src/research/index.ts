import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import cv_url from 'url:../assets/joshua_yang_cv_spring_2025.pdf';

import pdf_1 from 'url:../art-portfolio/items/link_2025.pdf';
import pdf_2 from 'url:../art-portfolio/items/filteredink_2023.pdf';
import pdf_3 from 'url:../art-portfolio/items/portalink_2024.pdf';
import pdf_4 from 'url:../art-portfolio/items/animatedpatterns_2023.pdf';
import pdf_5 from 'url:../art-portfolio/items/vidstr_2025.pdf';

import g_1 from 'url:../art-portfolio/items/l_ink.gif';
import g_2 from 'url:../art-portfolio/items/filtered_ink_square.gif';
import g_3 from 'url:../art-portfolio/items/portal_ink.gif';
import g_4 from 'url:../art-portfolio/items/filtered_ink_actual.gif';
import t_1 from 'url:../art-portfolio/items/thumbnail_vidstr.png';

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

@customElement('research-page')
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
            width: 50rem;
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
                <div class="hero-title">My Research</div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <img class="img-teaser" src="${t_1}">
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">VidSTR: Automatic Spatiotemporal Retargeting of Speech-driven Video Compositions</div>
                        <div class="text-pub">Published at CHI '25 <a href="${pdf_5}" target="_blank">[📄pdf]</a></div>
                        <div class="text-link"><b>Joshua Kong Yang</b>, Mackenzie Leake, Jeff Huang, Stephen DiVerdi</div>
                    </div>
                </div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <img class="img-teaser" src="${g_1}">
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">L.ink: Illustrating Controllable Surprise with L-System Based Strokes</div>
                        <div class="text-pub">Published at CHI '25 EA <a href="${pdf_1}" target="_blank">[📄pdf]</a></div>
                        <div class="text-link">Eric Chen, Tongyu Zhou, <b>Joshua Kong Yang</b>, Jeff Huang</div>
                    </div>
                </div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <img class="img-teaser" src="${g_3}">
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">PortalInk: 2.5D Storytelling with SVG Parallax and Waypoint Transitions</div>
                        <div class="text-pub">Published at UIST '24 <a href="${pdf_3}" target="_blank">[📄pdf]</a></div>
                        <div class="text-link">Tongyu Zhou, <b>Joshua Kong Yang</b>, Vivian Hsinyueh Chan, Ji Won Chung, Jeff Huang</div>
                    </div>
                </div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <img class="img-teaser" src="${g_4}">
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">filtered.ink: Creating Dynamic Illustrations with SVG Filters</div>
                        <div class="text-pub">Published at CHI '23 <a href="${pdf_2}" target="_blank">[📄pdf]</a></div>
                        <div class="text-link">Tongyu Zhou, Connie Liu, <b>Joshua Kong Yang</b>, Jeff Huang</div>
                    </div>
                </div>

                <div class="research-item">
                    <div class="img-wrapper">
                        <img class="img-teaser" src="${g_2}">
                    </div>
                    <div class="text-wrapper">
                        <div class="text-title">Animated Patterns: Applying Dynamic Patterns to Vector Illustrations</div>
                        <div class="text-pub">Published at CHI '23 EA <a href="${pdf_4}" target="_blank">[📄pdf]</a></div>
                        <div class="text-link"><b>Joshua Kong Yang</b></div>
                    </div>
                </div>
            </div>

            <footer>
                <p>Made with ❤️ in Providence</p>
            </footer>
        </div>`;
    }
}