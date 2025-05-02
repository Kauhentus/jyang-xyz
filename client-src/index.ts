import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import cv_url from 'url:./assets/joshua_yang_cv_spring_2025.pdf';

import logo_daniel from 'url:./assets/homepage-imgs/logo_daniel.jpg';
import logo_printers from 'url:./assets/homepage-imgs/logo_printers.jpg';
import logo_vidstr from 'url:./assets/homepage-imgs/logo_vidstr.jpg';
import logo_warp from 'url:./assets/homepage-imgs/logo_warp.jpg';

import g_1 from 'url:./art-portfolio/items/l_ink.gif';
import g_2 from 'url:./art-portfolio/items/portal_ink.gif';
import g_3 from 'url:./art-portfolio/items/filtered_ink_actual.gif';
import g_4 from 'url:./art-portfolio/items/filtered_ink_square.gif';

import pdf_1 from 'url:./art-portfolio/items/link_2025.pdf';
import pdf_2 from 'url:./art-portfolio/items/portalink_2024.pdf';
import pdf_3 from 'url:./art-portfolio/items/filteredink_2023.pdf';
import pdf_4 from 'url:./art-portfolio/items/animatedpatterns_2023.pdf';

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

@customElement('index-page')
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

        .hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 8rem;
        }

        .hero-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
        }
        @media (max-width: 700px) {
            .hero-wrapper {
                flex-direction: column;
            }
            .hero-container {
                margin-top: 4rem;
            }
        }
        @media (min-width: 700px) {
            .hero-wrapper {
                flex-direction: row;
            }
        }

        .hero-name {
            font-family: Wulkan Display Bold;
            font-size: 10vw;
            width: 40%;
            line-height: 1;
            margin-top: -0.5rem;
        }
        @media (max-width: 700px) {
            .hero-name {
                font-size: 20vw;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .hero-description-wrapper {
            display: flex; 
            flex-direction: column; 
            margin-left: 5rem;
            width: 35%;
        }
        .hero-description {
            font-family: Wulkan Text Regular;
            font-size: 2rem;
            width: fit-content;
            min-width: 16rem;
        }
        @media (max-width: 700px) {
            .hero-description-wrapper {
                margin-left: 0;
                width: 80%;
            }
            .hero-description {
                margin-top: 1rem;
                font-size: 1.5rem;
                text-align: center;
            }
        }

        .misc-details {
            margin-top: 1rem;
        }
        .misc-item {
            font-family: Wulkan Text Regular;
            font-style: italic;
            font-size: 1.25rem;
        }
        @media (max-width: 700px) {
            .misc-details {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .misc-item {
                text-align: center;
            }
        }

        .section-header {
            margin-top: 4rem; 
            font-family: Wulkan Display Bold; 
            font-size: 2rem; 

            max-width: 80rem;
            width: 90%;

            margin-left: 10rem;
            margin-right: 8rem;

        }
        @media (max-width: 700px) {
            .section-header {
                width: 100vw !important;
                text-align: center;
                font-size: 4rem !important;
                margin-top: 4rem !important;
            }
        }

        .preview-row {
            max-width: 80rem;
            width: 90%;

            margin-left: 8rem;
            margin-right: 8rem;

            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
        }
        .preview-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(25% - 2rem);
            margin-bottom: 2rem;
            margin-left: 1rem;
            margin-right: 1rem;
        }
        @media (max-width: 700px) {
            .preview-row {
                flex-direction: column;
                align-items: center;
            }

            .preview-item {
                width: 18rem;
            }
        }

        .preview-img-container {
            width: 100%;
            aspect-ratio: 1;
            overflow: hidden;
            border: 1px solid black;
        }
        .preview-img {
            width: 100%;
            height: 100%;
        }

        .label-1 {
            font-family: Wulkan Display Bold;
            font-size: 2rem;
            margin-top: 1rem;
            text-align: center;
            width: 100%;
        }

        .label-2 {
            font-family: Wulkan Text Regular;
            font-size: 1.25rem;
            margin-top: 0.5rem;
            text-align: center;
            
            width: 100%;
        }

        footer {
            font-family: Wulkan Text Regular;
            font-size: 1.25rem;
            margin-top: 8rem;
            margin-bottom: 4rem;
        }

        .no-decoration {
            text-decoration: none !important;
            color: black !important;
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
            
            <div class="hero-container">
            <div class="hero-wrapper">
            <div class="hero-name">JOSHUA YANG</div>

            <div class="hero-description-wrapper" style="">
            <p class="hero-description">
                I research how productive users interface with 
                <span style="white-space: nowrap;">technology <a class="no-decoration" href="/research">↗</a></span>
            </p>
            
            <div class="misc-details">
                <p class="misc-item" style="white-space: nowrap;">Previously at 
                    <a target="_blank" href="https://research.adobe.com/">Adobe Research</a>
                    <a class="no-decoration" href="/research">↗</a>
                </p>
                <p class="misc-item">
                    <span style="white-space: nowrap;">
                        Graduating from 
                        <a target="_blank" href="https://cs.brown.edu/">Brown</a> 
                        <a class="no-decoration" href="/research">↗</a>
                    </span>
                    <span style="white-space: nowrap;">
                        with a focus on HCI
                    </span>
                </p>
                <p class="misc-item"><a target="_blank" href="${cv_url}">CV</a> / <a href="mailto:joshua_yang@brown.edu">Email</a></p>
            </div>
            </div>

            </div>
            </div>

                        <!-- ################## -->
            <!--  RESEARCH SECTION  -->
            <!-- ################## -->

            
            <div class="section-header">
                RESEARCH 
            </div>
            <div style="margin-top: 1rem;" class="preview-row">

            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="${pdf_1}" target="_blank">
                        <img class="preview-img" src="${g_1}">
                    </a>
                </div>
                <a class='no-decoration' href="${pdf_1}" target="_blank">
                    <div class="label-1">L.ink</div>
                </a>
                <div class="label-2">Controllable surprise with dynamic, growing ink 
                    <span style="white-space: nowrap;">(CHI EA '25)</span>
                </div>
            </div>

            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="${pdf_2}" target="_blank">
                        <img class="preview-img" src="${g_2}">
                    </a>
                </div>
                <a class='no-decoration' href="${pdf_2}" target="_blank">
                    <div class="label-1">Portal.ink</div>
                </a>
                <div class="label-2">2.5D vector illustrations with parallax depth and portals 
                    <span style="white-space: nowrap;">(UIST '24)</span>
                </div>
            </div>

            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="${pdf_3}" target="_blank">
                        <img class="preview-img" src="${g_3}">
                    </a>
                </div>
                <a class='no-decoration' href="${pdf_3}" target="_blank">
                    <div class="label-1">filtered.ink</div>
                </a>
                <div class="label-2">Authoring dynamic SVG textures for vector illustration 
                    <span style="white-space: nowrap;">(CHI '23)</span>
                </div>
            </div>


            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="${pdf_4}" target="_blank">
                        <img class="preview-img" src="${g_4}">
                    </a>
                </div>
                <a class='no-decoration' href="${pdf_4}" target="_blank">
                    <div class="label-1">Animated Patterns</div>
                </a>
                <div class="label-2">Authoring animated patterns in SVG for vector illustration
                    <span style="white-space: nowrap;">(CHI EA '23)</span>
                </div>
            </div>
            </div>

            <!-- ################## -->
            <!--  PROJECT SECTION   -->
            <!-- ################## -->

            <div class="section-header">
                PROJECTS
            </div>
            <div style="margin-top: 1rem;" class="preview-row">

            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="/iterative-design" target="_blank">
                        <img class="preview-img" src="${logo_vidstr}">
                    </a>
                </div>
                <a class='no-decoration' href="/iterative-design" target="_blank">
                    <div class="label-1">Adobe Research</div>
                </a>
                <div class="label-2">Automating video editing through intelligent composition retargeting</div>
            </div>

            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="/iterative-design" target="_blank">
                        <img class="preview-img" src="${logo_warp}">
                    </a>
                </div>
                <a class='no-decoration' href="/iterative-design" target="_blank">
                    <div class="label-1">Warp AI</div>
                </a>
                <div class="label-2">Designing Warp Community to augment Warp Terminal</div>
            </div>

            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="/responsive-redesign" target="_blank">
                        <img class="preview-img" src="${logo_daniel}">
                    </a>
                </div>
                <a class='no-decoration' href="/responsive-redesign" target="_blank">
                    <div class="label-1">DANIEL SMITH</div>
                </a>
                <div class="label-2">Product page redesign for the 5ml watercolor line</div>
            </div>


            <div class="preview-item">
                <div class="preview-img-container">
                    <a href="/personas-storyboarding" target="_blank">
                        <img class="preview-img" src="${logo_printers}">
                    </a>
                </div>
                <a class='no-decoration' href="/personas-storyboarding" target="_blank">
                    <div class="label-1">Personas Study</div>
                </a>
                <div class="label-2">for Ricoh campus printer interfaces</div>
            </div>
            </div>

            <footer>
                <p>Made with ❤️ in Providence</p>
            </footer>
        </div>`;
    }
}