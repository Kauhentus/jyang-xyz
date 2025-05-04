import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import warp_1 from 'url:./screenshots/warp_product.png';
import warp_2 from 'url:./screenshots/logo_warp.jpg';
import warp_3 from 'url:./screenshots/warp_cross.png';

import warp_4 from 'url:./screenshots/warp_objects.png';
import warp_5 from 'url:./screenshots/warp_competitors.png';
import warp_6 from 'url:./screenshots/whiteboard_iter.jpg';
import warp_7 from 'url:./screenshots/warp_components.png';
import warp_8 from 'url:./screenshots/warp_flows.png';

import warp_9 from 'url:./screenshots/loom_video.mp4';

import sketch_1 from 'url:./sketches/sketch1.png';
import sketch_2 from 'url:./sketches/sketch2.png';
import sketch_3 from 'url:./sketches/sketch3.png';
import sketch_4 from 'url:./sketches/sketch4.png';
import sketch_5 from 'url:./sketches/sketch5.png';
import sketch_6 from 'url:./sketches/sketch6.png';
import sketch_7 from 'url:./sketches/sketch7.png';
import sketch_8 from 'url:./sketches/sketch8.png';
import sketch_9 from 'url:./sketches/sketch9.png';
import sketch_10 from 'url:./sketches/sketch10.png';
import sketch_11 from 'url:./sketches/sketch11.png';
import sketch_12 from 'url:./sketches/sketch12.png';
import sketch_13 from 'url:./sketches/sketch13.png';

import lofi_1 from 'url:./screenshots/lofi_1.png';
import lofi_2 from 'url:./screenshots/lofi_2.png';
import lofi_3 from 'url:./screenshots/lofi_3.png';
import lofi_4 from 'url:./screenshots/lofi_4.png';
import lofi_5 from 'url:./screenshots/lofi_5.png';
import lofi_6 from 'url:./screenshots/lofi_6.png';


@customElement('responsive-redesign')
export class HelloWorld extends LitElement {
    static styles = css`
        :host {
            width: 1000px;
            background-color: white;

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 1200px) {
            :host {
                width: 80%;
            }
        }

        .margin-top-05rem {
            margin-top: 0.5rem;
        }

        .margin-top-1rem {
            margin-top: 1rem;
        }

        .margin-top-2rem {
            margin-top: 2rem;
        }

        .margin-top-3rem {
            margin-top: 3rem;
        }

        .margin-top-4rem {
            margin-top: 4rem;
        }

        .margin-top-6rem {
            margin-top: 6rem;
        }

        .margin-top-8rem {
            margin-top: 8rem;
        }

        .margin-bottom-1rem {
            margin-bottom: 1rem;
        }

        .margin-bottom-4rem {
            margin-bottom: 4rem;
        }

        .expand-full-width {
            width: 100%;
        }

        .grid-row {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
        }

        .text-block {
            text-align: justify; 
            hyphens: auto;
        }

        .caption-text-block {
            text-align: justify; 
            hyphens: auto;
            margin-top: 2rem;
            margin-left: 2rem;
            margin-right: 2rem;
            margin-bottom: 2rem;

            font-size: 0.8em;
            font-style: italic;
        }

        .has-dropcap:first-letter {
            float: left;
            font-size: 6rem;
            line-height: 0.65;
            margin: 0.1em 0.1em 0.2em 0;
            font-family: Wulkan Display Bold;
        }

        .vertical-line {
            width: 1px;
            height: 100%;
            border-left: 1px solid black;
            margin-top: 1rem;
            margin-bottom: 4px;
        }

        .grid-row-full-column {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        h1, h2, h3, h4, h5, h6 {
            all: unset;
            display: block;
        }

        .big-header {
            margin-top: 4rem;
            font-family: Wulkan Display Bold;
            font-size: 4em;
        }

        .small-preheader-bold {
            font-family: Wulkan Display Bold;
            font-size: 2em;
        }

        .small-preheader {
            font-family: Wulkan Display;
            font-size: 1.5em;
        }

        .right-align-header {
            text-align: left;
            font-family: Wulkan Display;
            font-size: 2em;
            width: 100%;
        }

        .xl-big-header {
            // margin-top: -1rem;
            margin-bottom: 1rem;
            line-height: 1;

            font-family: Wulkan Display Bold Italic;
            font-size: 6em;
        }

        .column-A {
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .column-B {
            width: 60%; 
            margin-left: 2rem;


            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .column-D {
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        img {
            width: 100%;
        }

        table {
            border-collapse: collapse;
        }
        th, td {
            border-right: 1px dashed black;
            border-bottom: 1px dashed black;
            padding: 10px;

            text-align: left;
            vertical-align: top;
        }
        th:last-child, td:last-child {
            border-right: none;
        }
        tr:last-child th, tr:last-child td {
            border-bottom: none;
        }
        .table-header {
            font-family: Wulkan Display Bold;
        }

        .right-text-block-special {
            // padding: 0 4rem;
            width: 80%;
            line-height: 1.15;
            font-family: Wulkan Display Regular;
            font-size: 24pt;
        }

        .grid-container-4x3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            row-gap: 0rem;
            width: 100%;
        }

        .grid-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .grid-item img {
            clip-path: inset(4px);
        }

        .grid-caption {
            margin: 2rem 2rem 0rem 2rem;
        }

        .page-pic-container-t {
            border: 1px solid black;
            border-bottom: 1px dashed gray !important;
            width: 100%; 
        }

        .page-pic-container-c {
            border: 1px solid black;
            border-top: 1px dashed gray !important;
            border-bottom: 1px dashed gray !important;
            width: 100%; 
        }

        .page-pic-container-b {
            border: 1px solid black;
            border-top: 1px dashed gray !important;
            width: 100%; 
        }

        .sketch-img {
            width: auto;
            height: 15rem;
            margin: 1rem 1rem 1rem 0rem;
            border: 1px dashed black;
        }
    `;

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        return html`
        <div class="margin-top-4rem"></div>

        <div tabIndex="0" class="grid-row-full-column">
            <h1 class="small-preheader-bold">Iterative Design & Evaluation of</h1>
            <h1 class="xl-big-header">Warp Community</h1>
            
        </div>
        <div class="grid-row">
            <div tabIndex="0" class="column-A text-block margin-top-1rem">
                For CSCI 1300, Interaction Design at Brown University, 
                we had the unique opportunity to officially work with Warp through a Brown CSCI 1300 x Google Ventures partnership.
                My group worked on developing Warp Community, a sharing platform for developers to discover, share, and implement Warp objects.
                <br><br>
                <span style="text-align: left; width: 100%">
                Team: 
                <span><a target="_blank" href="https://www.linkedin.com/in/alex-koong-b7298123b/    ">Alex</a></span>, 
                <span><a target="_blank" href="https://www.linkedin.com/in/apoorva-talwalkar-b5b3b82a0/">Apoorva</a></span>, 
                <span><a target="_blank" href="https://www.linkedin.com/in/joshua-kong-yang/">Josh</a></span>, 
                <span><a target="_blank" href="https://www.linkedin.com/in/spandan-goel/">Spandan</a></span>
                </span>
            </div>
            <div class="column-B">
                <div style="text-align: right; width: 100%" class="small-preheader margin-top-1rem">
                    CSCI 1300 <br> Warp / Google Ventures <br> Iterative Design
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">1: GETTING STARTED</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: CONTEXT</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    To introduce, Warp is a startup modernizing the conventional terminal with artificial intelligence features. 
                    With features like automatic command completion, smart suggestions for tons of CLI tools, 
                    and numerous quality-of-life improvements for users, 
                    Warp aims to optimize every developer's workflow.
                    <br><br>
                    
                    <div style="padding: 1.5rem; background-color: rgba(0, 0, 0, 0.1)">
                        For this iterative design project, I worked in a group of four.
                        If otherwise noted, we were all equally responsible for the work presented here 
                        (many collaborative hours in the CIT).
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container">
                    <img src="${warp_1}" class="" style="clip-path: inset(0 0 1rem 0); margin-bottom: -1rem;">
                    <div class="caption-text-block" style="margin-top: 1rem !important; text-align: center;">
                        The start-up screen for Warp's AI-powered terminal session.
                        Users can input commands in both shell scripts and natural language.
                    </div>
                </div>
            </div>
        </div> 
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    We've been tasked to design a community page for Warp in an official partnership through Google Ventures. 
                    The vision for Warp Community is for to users share everything from simple workflows to complex automations, even if they're an individual hobbyist dev or an 
                    industry professional who relies on Warp every day.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container">
                    <img src="${warp_3}" class="" style="clip-path: inset(0 0 1rem 0); margin-bottom: -1rem; padding: 0 4rem; width: calc(100% - 8rem); margin-left: 1rem;">
                </div>
            </div>
        </div> 


        <div class="grid-row grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: PRESENT FACTORS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                After being onboarded to the project, we began familiarizing ourselves with Warp, its AI-augmented terminal sessions, and the “meta” objects (Prompts, Workflows, Environment Variables, and Notebooks) used, saved, and retrieved in local use of Warp. In addition to surveying competitors (Windsurf, Cursor, Claude Code, and Devin), we arrived at the present factors to inform our design of Warp Community:
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B" style="flex-direction: column;">
                <div style="display: flex; flex-direction: row; width: 100%; position: relative; padding-top: calc(100% / 2.5);">
                    <div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; display: flex;">
                    <div style="width: auto; height: 100%; display: block; overflow: hidden; border: 1px dashed black; margin-right: 1rem;">
                        <img class='web-img' src="${warp_4}" style="width: 100%; height: 100%; display: block;">
                    </div>
                    <img src="${warp_5}" style="border: 1px dashed black; width: auto; height: 100%; display: block">
                    </div>
                </div>
                <div class="caption-text-block" style="margin-top: 1rem !important; text-align: center;">
                    Left: the four objects within the existing Warp product. Right: Warp competitors.
                </div>
            </div>
        </div>

        <div class="grid-row margin-top-1rem">
            <div class="column-D" style="padding: 2rem 2rem 1rem 2rem; margin-right: 1rem; background-color: rgba(0, 0, 0, 0.1)">
                <div tabIndex="0" class="text-block">
                    <b>Existing Considerations:</b>
                    <br>
                    <ul style="padding: 0 1rem">
                        <li>Users currently share solutions through fragmented channels (GitHub, Reddit, Discord) and unstandardized mediums.</li>
                        <li>Competitive products lack comprehensive and fully integrated community features.</li>
                    </ul>
                </div>
            </div>
            <div class="column-D" style="padding: 2rem 2rem 1rem 2rem; margin: 0 1rem; background-color: rgba(0, 0, 0, 0.1)">
                <div tabIndex="0" class="text-block">
                    <b>Customer Motivations:</b>
                    <br>
                    <ul style="padding: 0 1rem">
                        <li>Desire to improve productivity using AI tools and learning from other experienced developers.</li>
                        <li>Seek to stay current with rapidly evolving AI techniques and approaches.</li>
                    </ul>
                </div>
            </div>
            <div class="column-D" style="padding: 2rem 2rem 1rem 2rem; margin-left: 1rem; background-color: rgba(0, 0, 0, 0.1)">
                <div tabIndex="0" class="text-block">
                    <b>Issues with Existing Solutions:</b>
                    <br>
                    <ul style="padding: 0 1rem">
                        <li>Difficulty finding high-quality, relevant examples of rules, plans, and prompts.</li>
                        <li>No streamlined way to implement discovered solutions into existing projects.</li>
                        <li>Lack of feedback on their own created content.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART C: PROJECT GOALS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    We aggregate this thinking into the goal statement on the right.
                    Our goal is to creating a platform that increases all the following <b>success metrics</b> across Warp Terminal and Warp Community:
                    <br><br>

                    <div style="padding: 0.5rem 1rem; background-color: rgba(0, 0, 0, 0.1)">
                        <ul style="padding: 0rem 2rem">
                            <li>Contribution rate</li>
                            <li>Implementation rate</li>
                            <li>Time saved</li>
                            <li>Overall user engagement</li>
                        </ul>
                    </div>
                </div>  

                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div tabIndex="0" class="text-block right-text-block-special" style="margin-top: 2rem">
                    Design an community hub for users where they can
                    post and view rules, plans, and prompt templates
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">2: SKETCHES + WIREFRAMES</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: INDIVIDUAL SKETCHES</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="">
                <div tabIndex="0" class="text-block">
                    We started off by independently brainstorming designs for Warp Community, 
                    and drawing up the following sketches below. 
                    The three outlined in yellow were mine. I was inspired by the idea of positioning Warp Community as a "social" rsearch engine,
                    deriving inspiration from Google, Perplexity, and Reddit.
                    Afterwards, we came together and synthesized components we liked from each member into a group-sketch on some whiteboards.
                </div>
            </div>
        </div>

        <div class="grid-row" style="width: 100%; overflow-x: scroll;">
            <img src="${sketch_1}" class="sketch-img">
            <img src="${sketch_2}" class="sketch-img" style="border: 3px dashed rgb(216, 149, 4);">
            <img src="${sketch_3}" class="sketch-img">
            <img src="${sketch_4}" class="sketch-img">
            <img src="${sketch_5}" class="sketch-img">
            <img src="${sketch_6}" class="sketch-img" style="border: 3px dashed rgb(216, 149, 4);">
            <img src="${sketch_7}" class="sketch-img">
            <img src="${sketch_8}" class="sketch-img">
            <img src="${sketch_9}" class="sketch-img" style="border: 3px dashed rgb(216, 149, 4);">
            <img src="${sketch_10}" class="sketch-img">
            <img src="${sketch_11}" class="sketch-img">
            <img src="${sketch_12}" class="sketch-img">
            <img src="${sketch_13}" class="sketch-img">
        </div>

        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: COLLABORATIVE WIREFRAMING</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Consolidating, we wrapped all sorts of variations on content
                    &mdash; such as “article”, “text thread”, “note”, and more &mdash;
                    into a single “post” entity that is the core unit of information for Warp Community objects. 
                    We realized too many forms of information potentially create confusion and mental overload for the user 
                    <!-- (i.e. avoiding four different designs for the different object types).  -->
                    A unified component brings consistency and immediate familiarity to the user.
                    <br><br>

                    <div style="padding: 1.5rem; background-color: rgba(0, 0, 0, 0.1)">
                        The combined vision included a search-first landing page with trending and recommended content, discover and search pages, 
                        and both post creation and post viewing capabilities.
                    </div>
                    <br>
                    We mocked up our whiteboard&mdash;synthesizing of our sketches into lo-fi wireframes using Balsamiq.
                    All team members contributed to each wireframe through turns of asynchronous work on our cloud document.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div style="display: flex; flex-direction: row; width: 100%;">
                    <a href="${lofi_1}" target="_blank"><img src="${lofi_1}" style="border: 1px dashed black; width: calc(100% - 0.5rem); margin-right: 0.5rem;"></a>
                    <a href="${lofi_2}" target="_blank"><img src="${lofi_2}" style="border: 1px dashed black; width: calc(100% - 0.5rem); margin-left: 0.5rem;"></a>
                </div>
                <div class="margin-top-05rem" style="display: flex; flex-direction: row; width: 100%;">
                    <a href="${lofi_3}" target="_blank"><img src="${lofi_3}" style="border: 1px dashed black; width: calc(100% - 0.5rem); margin-right: 0.5rem;"></a>
                    <a href="${lofi_4}" target="_blank"><img src="${lofi_4}" style="border: 1px dashed black; width: calc(100% - 0.5rem); margin-left: 0.5rem;"></a>
                </div>
                <div class="margin-top-05rem" style="display: flex; flex-direction: row; width: 100%;">
                    <a href="${lofi_5}" target="_blank"><img src="${lofi_5}" style="border: 1px dashed black; width: calc(100% - 0.5rem); margin-right: 0.5rem;"></a>
                    <a href="${lofi_6}" target="_blank"><img src="${lofi_6}" style="border: 1px dashed black; width: calc(100% - 0.5rem); margin-left: 0.5rem;"></a>
                </div>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Click on each image to view the lo-fi wireframes in full resolution.</div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">3: ITERATING ON FEEDBACK</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: RECEIVING WIREFRAME FEEDBACK</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    A weekend later, we received feedback from the Warp team and met with Vanessa Cho, VP at Google Design. 
                    She gave us crucial feedback in focusing on the success metrics. 
                    Our design so far had focused on providing a Warp Community interface to house shared Warp objects, but there was nothing that prioritized the Warp Terminal user. We didn’t connect the sharing platform with the app itself.
                    <br><br>
                    This is something the Warp team also mentioned:
                    <br>
                    <div style="padding: 1.5rem; margin: 0.5rem 0; background-color: rgba(0, 0, 0, 0.1)">
                        Why would one use Warp Community over Reddit, X, or HackerNews? 
                    </div>
                    Here we realized was less is more.
                    How could we connect users <b>within</b> the Warp Terminal in a beneficial way to Warp Community?
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div tabIndex="0" class="text-block right-text-block-special" style="margin-top: 3rem; font-size: 1.5rem">
                    Key takeaway:
                </div>
                <div tabIndex="0" class="text-block right-text-block-special" style="margin-top: 1rem">
                    We needed to prioritize the success metrics and 
                    draw a path to the “house” we created to close the sharing loop.
                </div>
            </div>
        </div>

        <div class="grid-row margin-top-1rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: ITERATING ON OUR DESIGN</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    So back to the whiteboard we went, and decided to think critically about <b>the pathways users would take between Warp Community and Warp Terminal</b>.
                    As in, how does a workflow from someone’s Warp Drive actually end up on Warp Community? 
                    How does that same workflow save another user 3 hours of development effort? 
                    <br><br>
                    Brainstorming as a group and sketching this out (left) helped us arrive at the following
                    proposed interactions to close the sharing loop:
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${warp_6}" target="_blank">
                    <img src="${warp_6}" style="border: 1px dashed black;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Click on the image to view the whiteboarding in full resolution.</div>
            </div>
        </div>

        <div class="grid-row margin-top-1rem">
            <div class="column-D" style="width: 40%; padding: 2rem 2rem 1rem 2rem; margin-right: 1rem; background-color: rgba(0, 0, 0, 0.1)">
                <div tabIndex="0" class="text-block">
                    <b style="text-align: left; display: inline-block;">Proposed Interactions in Warp Terminal:</b>
                    <br>
                    <ul style="padding: 0 1rem">
                        <li>Getting suggested objects from WC when querying the LLM</li>
                        <li>Star-ing objects for future usage</li>
                        <li>Making copies of objects to edit</li>
                        <li>Publishing objects to WC</li>
                        <li>Managing object versions on WC</li>
                    </ul>
                </div>
            </div>
            <div class="column-D" style="width: 40%; padding: 2rem 2rem 1rem 2rem; margin: 0 1rem; background-color: rgba(0, 0, 0, 0.1)">
                <div tabIndex="0" class="text-block">
                    <b style="text-align: left; display: inline-block;">Proposed Interactions in Warp Community:</b>
                    <br>
                    <ul style="padding: 0 1rem">
                        <li>Discovering popular, trending, and useful objects</li>
                        <li>Searching for a specific object</li>
                        <li>Ability to view entire objects in the WC UI itself</li>
                        <li>Opening an object in Warp Terminal for views and edits</li>
                    </ul>
                </div>
            </div>
            <div class="column-D" style="margin-left: 1rem; margin-top: 2rem">
                <div tabIndex="0" class="text-block">
                    The new focus on sharing and implementing required designing within the existing UI and pruning down our proposed WC platform. 
                    We quickly wrote up a technical document discussing this new redesign sent it over to the Warp team. 
                    They were pleased and our new strategy was successful!
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">4: HI-FI PROTOTYPING</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: DEVELOPING COMMON COMPONENTS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Since features now span across both the Warp Terminal and a Warp Community platform, we created a design style guide. 
                    This was key for the cards that represented objects that appear during a terminal session or a Warp Community search.
                    <br><br>
                    <div style="padding: 1.5rem; margin: 0.5rem 0; background-color: rgba(0, 0, 0, 0.1)">
                        Spandan and I created the Figma components here. He created the base design and I added the interactions, variants, variables, and prototyping flows to the components.
                    </div>
                    <br>
                    Common, consistent UI for the proposed “sharing” and “implementing” interactions — 
                    which came out of iterating on feedback — help facilitate the flows from Warp Terminal to Warp Community and back.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${warp_7}" target="_blank">
                    <img src="${warp_7}" style="border: 1px dashed black; background-color: #1E1E1E; padding-bottom: 0.5rem; padding-right: 0.25rem;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Click on the image to view the style guide in full resolution.</div>
            </div>
        </div>

        <div class="grid-row margin-top-1rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: CREATING THE PROTOTYPES</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="">
                <div tabIndex="0" class="text-block">
                    Warp Community begins with a session in Warp Terminal where users begin their AI-assistant terminal work. 
                    Just as the LLM provides suggestions to a user’s workflow, relevant objects are pulled from Warm Community 
                    to augment the LLM response and displayed as cards below the prompt which can immediately be run with a single click. 
                    Our vision was to make it as easy as possible to use Warp Community content for the average Warp user — no need to go out of one’s way. 
                    Users can also collapse this UI to persistently opt-out (or opt back in!) from suggested community posts for a session.
                </div>
            </div>
        </div>

        <iframe style="border: 1px solid rgba(0, 0, 0); aspect-ratio: 1.75; margin-top: 1rem;" width="100%" src="https://embed.figma.com/design/BhpgGy0QfRw2gxvB4yyUtk/Warp-AI-Hi-Fis?node-id=0-1&embed-host=share" allowfullscreen></iframe>

        <div class="grid-row margin-top-1rem">
            <div class="">
                <div tabIndex="0" class="text-block">
                    A more targeted, searchable version of suggested community objects is available in the Warp Command Palette. 
                    We extended existing UI used for quick access to a user’s local Warp Drive objects to also have quick access to Warp Community shared objects.
                    Now, these shared objects are easily viewable and forkable in a seamless integration with the user’s personal Warp Drive. 
                    Our cards are simply a UI wrapper around the core object. 
                    Since all objects are stored in one’s Warp Drive, we added a one-click step to publish content directly to Warp Community.
                </div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                We finally designed an external, web interface for Warp Community separate from the Warp Terminal. 
                    Here users are able to search and explore shared content independent of a working session within Warp Terminal. 
                    The landing page turns into a discovery page upon scrolling, with both recommended and trending objects. 
                    Using the search bar turns discovery into searching. Objects (and their cards) are neatly rendered in full pages for reading.
                    <br><br>
                    <div style="padding: 1.5rem; margin: 0.5rem 0; background-color: rgba(0, 0, 0, 0.1)">
                        The divide between Warp Terminal and Warp Community became additional complexity to design around. 
                        We used Figma's prototyping system to both model and track the interaction flows between all these screens. 
                        This is visualized on the right.
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${warp_8}" target="_blank">
                    <img src="${warp_8}" style="border: 1px dashed black; background-color: #1E1E1E; padding-bottom: 0.5rem; padding-right: 0.25rem;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Click on the image to view the style guide in full resolution.</div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">5: RESULTS + TAKEAWAYS</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: FINAL DESIGN</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="">
                <div tabIndex="0" class="text-block">
                    We demonstrate our final design in the following Loom video. We walk through the implementation interaction flows (using content from Warp community in the current session) and the sharing interaction flows (publishing content to Warp community). We also demonstrate the web interface for Warp Community and how it re-integrates with the Warp Terminal. These are facilitated by extensive prototyping, interaction, and flow set-ups in Figma.
                </div>
            </div>
        </div>

        <video style="clip-path: inset(0.25rem); aspect-ratio: 1.75; margin-top: 1rem;" width="100%" src="${warp_9}" controls></video>

        <div class="grid-row margin-top-1rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: MEETING WITH WARP</h2>
            </div>
        </div>
        <style>
            .dropcap {
                float: left;
                font-size: 2.25em;
                line-height: 1;
                padding-right: 0.2em;
                font-weight: bold;
                font-family: Wulkan Display Bold;
            }
        </style>
        <div class="grid-row margin-top-1rem" style="display: flex; flex-direction: column; align-items: flex-start;">
            <div class="column-A" style="width: 70%;">
                <div tabIndex="0" class="text-block">
                    We soon met with Warp's design team to receive a final round of feedback.
                    <br><br>
                    <span class="dropcap">1</span> Their key insight was to further consider the unique scope of Warp, 
                    namely the fact that Warp was an actual console terminal with terminal users. 
                    Our card design (while facilitating implementation and sharing) required mouse clicking which neglects keyboard-only power users. 
                    This led to a productive discussion on introducing tabbing order and a numbering scheme.
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem" style="display: flex; flex-direction: column; align-items: center;">
            <div class="column-A" style="width: 70%;">
                <div tabIndex="0" class="text-block">
                    <span class="dropcap">2</span> The Warp team was also happy to see our integration of object creation and publication flow into the local Warp Drive. 
                    However, they brought up a great point for future demonstrations to consider the terminal pane setup of these interaction flows that move between different app states. 
                    Indeed, developers often obssess over their IDE and terminal configurations, 
                    so greater care would help create an even better product. 
                    <!-- In the future we could wireframe additional terminal layouts to see what our proposal looks like across a wider gamut of users. -->
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem" style="display: flex; flex-direction: column; align-items: flex-end;">
            <div class="column-A" style="width: 70%">
                <div tabIndex="0" class="text-block">
                    <span class="dropcap">3</span> Finally, we discussed the implications of interfacing users with large language models compared to traditional search and recommendation algorithms. 
                    <!-- Our design of Warp Community heavily relies on "pulling" content from the centralized hub to a local Warp session, and this could work in either direction.  -->
                    LLM responses are flexible but hallucinate, while search algorithm responses are reliable but cannot cover as much scenario ground. 
                    These case-by-base tradeoffs are constant considerations in designing for AI tools such as Warp.
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>

        <div class="grid-row margin-top-1rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART C: WHAT WE LEARNED</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem" style="display: flex; flex-direction: column; align-items: flex-start;">
            <div class="column-A" style="width: 70%;">
                <div tabIndex="0" class="text-block">
                    This was a great experience for us to work with a real company and product. We practiced iterative design out of necessity and, in retrospect, saw first-hand how the process arrives at a product that betters serves the user. Our hi-fi prototype was a vast improvement from where we started. In this process, we learned to ask questions and the importance of asking them soon. Our initial direction headed off-course and we could have saved everyone's time by asking the right questions earlier. 
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem" style="display: flex; flex-direction: column; align-items: center;">
            <div class="column-A" style="width: 70%;">
                <div tabIndex="0" class="text-block">
                    We also learned that the design sits in context of the product, where it is used, and the goals of the company. Our initial fixation on community platform-building stemmed from losing sight of the project's defined success metrics, which center around increasing user productivity/engagement/retention of the Warp Terminal itself. In defining the relation of Warp Community to Warp Terminal, we were able to iteratively arrive at a proposal that the Warp Team was excited to receive.    
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem" style="display: flex; flex-direction: column; align-items: flex-end;">
            <div class="column-A" style="width: 70%">
                <div tabIndex="0" class="text-block">
                    Finally, we would like to thank the Warp team for the opportunity to design on their product and great feedback throughout the process. We would also like to thank Vanessa Cho from Google Design for her mentorship and guidance throughout the project and the course staff for Brown's CSCI 1300 Interaction Design course.  
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        
        <footer class="grid-row margin-top-4rem margin-bottom-4rem">
            <div class="text-block">
                March 2025
            </div>
        </footer>
        `;
    }
}