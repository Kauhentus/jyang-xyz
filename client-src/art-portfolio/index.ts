import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import wp_1 from 'url:./items/watercolor_portrait_1.jpg';
import wp_2 from 'url:./items/watercolor_portrait_2.jpg';
import wp_3 from 'url:./items/watercolor_portrait_3.jpg';
import wp_4 from 'url:./items/watercolor_portrait_4.jpg';
import wp_5 from 'url:./items/watercolor_portrait_5.jpg';
import wp_6 from 'url:./items/watercolor_portrait_6.jpg';
import wp_7 from 'url:./items/watercolor_portrait_7.jpg';

import wf_1 from 'url:./items/watercolor_figure_1.jpg';
import wf_2 from 'url:./items/watercolor_figure_2.jpg';
import wf_3 from 'url:./items/watercolor_figure_3.jpg';
import wf_4 from 'url:./items/watercolor_figure_4.jpg';

import wm_1 from 'url:./items/watercolor_misc_1.jpg';
import wm_2 from 'url:./items/watercolor_misc_2.jpg';
import wm_3 from 'url:./items/watercolor_misc_3.jpg';

import a_1 from 'url:./items/acrylic_1.jpg';
import a_2 from 'url:./items/acrylic_2.jpg';

import v_1 from 'url:./items/vector_1.jpeg';
import v_2 from 'url:./items/vector_2.jpeg';
import v_3 from 'url:./items/vector_3.jpeg';
import v_4 from 'url:./items/vector_4.jpeg';
import v_5 from 'url:./items/vector_5.jpeg';
import v_6 from 'url:./items/vector_6.jpeg';
import v_7 from 'url:./items/vector_7.jpeg';


import d_1 from 'url:./items/digital_1.jpg';
import d_2 from 'url:./items/digital_2.jpg';
import d_3 from 'url:./items/digital_3.jpg';
import d_4 from 'url:./items/digital_4.jpg';
import d_5 from 'url:./items/digital_5.jpg';
import d_6 from 'url:./items/digital_6.jpg';
import d_7 from 'url:./items/digital_7.jpg';

import g_1 from 'url:./items/l_ink.gif';
import g_2 from 'url:./items/filtered_ink.gif';
import g_3 from 'url:./items/portal_ink.gif';

import pdf_1 from 'url:./items/link_2025.pdf';
import pdf_2 from 'url:./items/filteredink_2023.pdf';
import pdf_3 from 'url:./items/portalink_2024.pdf';

@customElement('index-page')
export class HelloWorld extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            display: block;
            padding: 16px;
            color: var(--hello-world-text-color, black);
            font-family: sans-serif;
        }

        h1 {
            font-family: Wulkan Display Bold;
            font-size: 4rem;
            margin-left: 1rem;
        }

        h2, h3, h4, p {
            margin: 0;
            padding: 0;
        }

        h3 {
            margin-bottom: 0.5rem;
        }

        .column-1 {
            width: 25%;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        img {
            width: 100%;
            margin-bottom: 1rem;
        }

        .main-body {
            display: flex;
            flex-direction: row;
        }

        .r-line {
            border-right: 1px solid gray;
        }
            
        .header-body {
            display: flex;
            flex-direction: row;
        }

        .research-item {
            display: flex;
            flex-direction: row;
        }

        .preview-thumbnail {
            margin-right: 1rem;
            border: 1px solid black;
            margin-bottom: 2rem;
        }

        .research-inner {
            display: flex;
            flex-direction: column;
            width: calc(100% - 8rem);
            margin-right: 1rem;
        }

        .research-container {
            display: flex;
            flex-direction: row;

            margin-left: auto;
            margin-right: 1rem;
        }

        .description {
            padding-bottom: 1rem;
        }

        .name {
            text-decoration: none;
            color: black;
        }
    `;

    render() {
        return html`

        <div class="header-body">
            <h1><a class="name" href="../">Joshua Yang</a></h1>

            <div class="research-container" style="margin-bottom: 1rem">

            
            </div>
        </div>


        <div class="main-body">

        <div class="column-1 r-line"> 
            <p class="description">Digital (Photoshop, Procreate)</p>
            <img src="${d_4}">
            <img src="${d_3}">
            <img src="${d_2}">
            <img src="${d_1}">
            <img src="${d_5}">
            <img src="${d_6}">
        </div>

        <div class="column-1 r-line"> 
            <p class="description">Portraits (Watercolor)</p>
            <img src="${wp_5}">
            <img src="${wp_1}">
            <img src="${wp_2}">
            <img src="${wp_4}">
            <img src="${wp_6}">
            <img src="${wp_3}">
            <!-- <img src="${wp_7}"> -->
        </div>

        <div class="column-1 r-line"> 
            <p class="description">Misc Painting (Acrylic, Watercolor)</p>
            <img src="${a_1}">
            <img src="${a_2}">
            <img src="${wm_1}">
            <img src="${wm_3}">
            <img src="${wf_1}">
            <img src="${wf_2}">
            <img src="${wf_3}">
            <img src="${wf_4}">
            <img src="${wm_2}">
        </div>

        <div class="column-1"> 
            <p class="description">Vector (Research Tooling, Illustrator)</p>
            <img src="${v_2}">
            <img src="${v_4}">
            <img src="${v_1}">
            <img src="${v_3}">
            <img src="${v_5}">
            <img src="${v_6}">
            <img src="${v_7}">
            <p>
                N.B. I created all the illustrations in this column with 100% vector workflows.
                No raster software or pixel brushes (e.g. Photoshop) were used in my process.
            </p>
            <br>
            <br>

            <h2 style="width: 100%; text-align: center;">Relevant Research</h2>
            <br>

            <div class="research-item">
                <div class="preview-thumbnail" style="width: 6rem; height: 6rem; overflow: hidden;">
                    <img style="width: 100%; height: 100%;" src="${g_1}">
                </div>
                <div class="research-inner">
                <h3> L.ink: Illustrating Controllable Surprise with L-System Based Strokes</h2>
                <h4>Published at CHI '25 EA</h3>
                <!-- <p>
                    We present a drawing tool with "controllable-surpise" to disrupt ingrained workflows 
                    and spark creativity. Strokes are made through a growing, fractal representation.
                </p> -->
                <h4>Paper: <a href="${pdf_1}" target="_blank">[📄pdf]</a><h4>
                <br>
                </div>
            </div>

            <div class="research-item">
                <div class="preview-thumbnail" style="width: 6rem; height: 6rem; overflow: hidden;">
                    <img style="width: 100%; height: 100%;" src="${g_3}">
                </div>
                <div class="research-inner">
                <h3>PortalInk: 2.5D Storytelling with SVG Parallax and Waypoint Transitions</h2>
                <h4>Published at UIST '24</h3>
                <h4>Paper: <a href="${pdf_3}" target="_blank">[📄pdf]</a><h4>
                <!-- <p>
                    We present a 2.5D vector illustration tool that allows artists to work with depth and infinite zoom in
                    their traditional 2D domain. No 3D authoring like AE / Mental Canvas / Feather. 
                </p> -->
                <br>
                </div>
            </div class="research-item">

            <div class="research-item">
                <div class="preview-thumbnail" style="width: 6rem; height: 6rem; overflow: hidden;">
                    <img style="width: auto; height: 130%; margin-left: -5rem; margin-top: -2rem;" src="${g_2}">
                </div>
                <div class="research-inner">
                <h3>Filtered.ink: Creating Dynamic Illustrations with SVG Filters</h2>
                <h4>Published at CHI '23</h3>
                <h4>Paper: <a href="${pdf_2}" target="_blank">[📄pdf]</a><h4>
                <!-- <p>
                    We present a dynamic vector illustration tool that allows artists to add dynamic textures and animated patterns
                    to their artwork. Recreating the drawing experience in vector authoring.
                </p> -->
                <br>
                <br>
                </div>
            </div>

        </div>

        </div>
        `;
    }
}