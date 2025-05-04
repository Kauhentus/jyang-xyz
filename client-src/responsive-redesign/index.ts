import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import page_1 from 'url:./screenshots/page_1 Large.jpeg';
import page_2 from 'url:./screenshots/page_2 Large.jpeg';
import page_3 from 'url:./screenshots/page_3 Large.jpeg';
import page_4 from 'url:./screenshots/page_4 Large.jpeg';

import ally_1 from 'url:./screenshots/ally_1.jpeg';
import ally_2 from 'url:./screenshots/ally_2.png';

import style_sheet from 'url:./screenshots/style_sheet.jpg';

import annotated_phone_1 from 'url:./screenshots/annotated_phone_1.jpeg';
import annotated_phone_2 from 'url:./screenshots/annotated_phone_2.jpeg';
import annotated_phone_both from 'url:./screenshots/annotated_phone_both.jpeg';
import annotated_tablet_1 from 'url:./screenshots/annotated_tablet_1.jpeg';
import annotated_tablet_2 from 'url:./screenshots/annotated_tablet_2.jpeg';
import annotated_tablet_both from 'url:./screenshots/annotated_tablet_both.jpeg';
import annotated_desktop_1 from 'url:./screenshots/annotated_desktop_1.jpeg';
import annotated_desktop_2 from 'url:./screenshots/annotated_desktop_2.jpeg';

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
            line-height: 1;
            font-family: Wulkan Display Regular;
            font-size: 16pt;
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
    `;

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        return html`
        <div class="margin-top-4rem"></div>

        <div tabIndex="0" class="grid-row-full-column">
            <h1 class="small-preheader-bold">DANIEL SMITH's watercolor website</h1>
            <h1 class="xl-big-header">Reponsive Redesign</h1>
            
        </div>
        <div class="grid-row">
            <div tabIndex="0" class="column-A text-block margin-top-1rem">
                For CSCI 1300, Interaction Design at Brown University, I am redesigning the watercolor website of paint manufacturer Daniel Smith.
                We first identify visibility issues and perform a visual redesign complete with a new style guide and mockups.
                Finally we implement a responsive redesign of the website using HTML and CSS.
            </div>
            <div class="column-B">
                <div style="text-align: right; width: 100%" class="small-preheader margin-top-1rem">
                    CSCI 1300 <br> Responsive Redesign
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">1: USABILITY PROBLEMS</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: THE ORIGINAL WEBPAGE</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    This spring I have been taking VISA 1110: Drawing taught by Vessna Scheff which has a strong focus on watercolor.

                    I was looking for green mixing pigments and went to the Daniel Smith website to find a suitable shade to purchase.

                    It's quite the long, vertical website and I've sliced it into four parts on the right.

                    <br><br>

                    <a href="https://danielsmith.com/product/daniel-smith-extra-fine-watercolors-5ml/"> Link to page </a>

                    <br><br>

                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        The process of finding the shades I needed was extraordinarily involved, 
                        so I wanted to redesign this webpage. 
                        <b>Other creatives surely encountered similar problems with the website's experience.</b>
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container-t">
                    <img src="${page_1}" class="" style="clip-path: inset(0 0 1rem 0); margin-bottom: -1rem;">
                </div>
            </div>
        </div> 
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    First, the landing page is a single, vertical website.
                    An artist (e.g. me) looking to buy watercolor starts here and starts scrolling down.
                    The overal sections we pass through (and their layout) are as follows:

                    <ul>
                        <li><b>Header</b>: logo + navigation</li>
                        <li><b>Hero container</b>: text intro + image</li>
                        <li><b>Media content</b>: videos + articles</li>
                        <li><b>Color grid</b>: watercolor pigments </li>
                        <li><b>Footer</b>: outro + links</li>
                    </ul>

                    That's a lot of information to present linearly!
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container-c">
                    <img src="${page_2}" class="" style="clip-path: inset(0 0 5rem 0); margin-bottom: -5rem;">
                </div>
            </div>
        </div> 


        <div class="grid-row grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: USABILITY ISSUES</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Now what made this page "difficult to use"? 
                    First, we identify that users visit the page to:<br><br>

                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.05 )">
                    <span style="display: inline-block; font-family: Wulkan Display Bold; line-height: 1; width: 1rem;">1.</span> Learn about Daniel Smith watercolors<br>
                    <span style="display: inline-block; font-family: Wulkan Display Bold; line-height: 1; width: 1rem;">2.</span> Find watercolor shades.
                    </div>

                    <br>

                    Using this outline to inform our approach as designers, 
                    we can now analyze the usability of the webpage along axes of efficiency, learnability, and memorability:

                    <br><br>

                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                    <b style="font-weight: bold; line-height: 1;">Efficiency:</b> The page is extremely long and requires a lot of scrolling&mdash; it's twice as long as the sliced screenshots combined.
                    The text introduction is verbose; 
                    there are <i>so many</i> linked articles and tutorials for a landing page; 
                    and the color grid is too spread out.
                    </div>

                    <br>

                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.2)">
                    <b style="font-weight: bold; line-height: 1;">Learnability:</b> The redundancy and large amounts of graphics and corresponding texts makes the page easy to learn.
                    Things are self-explanitory at the cost of the aforementioned efficiency.
                    </div>

                    <br>

                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.3)">
                    <b style="font-weight: bold; line-height: 1;">Memorability & conceptual model:</b> The lack of categorization and sheer amount of information obscures the page hierarchy.
                    Redundancy makes it unclear what links to what: "full catalog", "272 color chart", and the grid all point to different versions of the same information.
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container-c">
                    <img src="${page_3}" class="" style="">
                </div>
                <div class="page-pic-container-b margin-top-1rem">
                    <img src="${page_4}" class="" style="clip-path: inset(0 0 6rem 0); margin-bottom: -6rem;">
                </div>
            </div>
        </div>
        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART C: ACCESSIBILITY PROBLEMS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Beyond basic usability issues that anyone may encounter, we also need to consider accessibility
                    across a web audience.
                    <br><br>
                    Using <a href="https://wave.webaim.org/report#/https://danielsmith.com/product/daniel-smith-extra-fine-watercolors-5ml/">WAVE</a>, 
                    we find that the color contrast is insufficient (e.g. light blue text on white background) &mdash;
                    one consideration for our redesign.
                    <br><br>
                    And using Chrome's <a href="https://developer.chrome.com/docs/lighthouse/overview">Lighthouse</a>, we find performance issues that lead to degraded experiences on low-end devices.
                    These are largely fixed with dev choices like progressive rendering and removing extraneous Wordpress plugins.

                    <br><br>

                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                    Nevertheless, we should keep in mind how <b>accessibility issues can arise from the engineering of our designs</b>.
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div style="display: flex; flex-direction: row; width: 100%; position: relative; padding-top: calc(100% / 1.5519808431615298);">
                    <div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; display: flex;">
                    <div style="width: auto; height: 100%; display: block; overflow: hidden; border: 1px dashed black; margin-right: 1rem;">
                        <img class='web-img' src="${ally_1}" style="width: 100%; height: 100%; display: block;">
                    </div>
                    <img src="${ally_2}" style="border: 1px dashed black; width: auto; height: 100%; display: block">
                    </div>
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">2: VISUAL REDESIGN</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: DESIGN STYLE GUIDE</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    To start our redesign, we first construct a design style guide
                    informed by the prior usability analysis.
                    Key topics addressed are:<br><br>
                    
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                    1. Increasing color contrast of accent colors <br>
                    2. Mobile versions of components <br>
                    3. Use components for memorable hierarchy <br>
                    4. "Better-aggregate" information in elements  
                    </div>
                    <br><br> 

                    Currently some components are not appropriately "reduced" for narrow viewports and the user needs to scroll for over a minute to reach the bottom of the page.
                    Consolidating information within elements so they are visually smaller will help with the user's navigation efficiency too.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${style_sheet}" target="_blank">
                    <img src="${style_sheet}" style="border: 1px dashed black;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Click on the image to view the style guide in full resolution.</div>
            </div>
        </div>
        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: MOCKUPS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="">
                <div tabIndex="0" class="text-block" style="">
                    Using the components from our style guide, we now create three mockups of the redesigned webpage with different viewport targets.
                    Annotations explaning design decisions (in red text) are included.
                    Below is a Figma embed of these mockups, and the Figma file can also be viewed 
                    <a href="https://www.figma.com/design/nTB8lhIJnlvmTix4momWDD/Visual-Style-Guide?node-id=0-1&t=3OWUOEGaHR2kDYNB-1" target="_blank">here</a>.
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>

        <iframe style="border: 1px solid rgba(0, 0, 0); aspect-ratio: 1.75" width="100%" src="https://embed.figma.com/design/nTB8lhIJnlvmTix4momWDD/Visual-Style-Guide?node-id=0-1&embed-host=share" allowfullscreen></iframe>
        
        <!-- 
        <div class="grid-row margin-top-1rem" style="box-sizing: border-box; align-items: flex-end; background-color: #F5F5F5; padding: 1rem; border: 1px dashed black;">
            <a href="${annotated_phone_both}" target="_blank"><img src="${annotated_phone_both}" style="display: block;"></a>
        </div>
        <div class="caption-text-block" style="margin-top: 1rem !important;">Mobile viewport redesign mockup. Click on the image to view the style guide in full resolution.</div>

        <div class="grid-row margin-top-1rem" style="box-sizing: border-box; align-items: flex-end; background-color: #F5F5F5; padding: 1rem; border: 1px dashed black;">
            <a href="${annotated_tablet_both}" target="_blank"><img src="${annotated_tablet_both}" style="display: block;"></a>
        </div>
        <div class="caption-text-block" style="margin-top: 1rem !important;">Tablet viewport redesign mockup.</div>

        <div class="grid-row margin-top-1rem" style="box-sizing: border-box; align-items: flex-end; background-color: #F5F5F5; padding: 1rem; border: 1px dashed black;">
            <a href="${annotated_desktop_1}" target="_blank"><img src="${annotated_desktop_1}" style="display: block;"></a>
        </div>
        <div class="grid-row margin-top-1rem" style="box-sizing: border-box; align-items: flex-end; background-color: #F5F5F5; padding: 1rem; border: 1px dashed black;">
            <a href="${annotated_desktop_2}" target="_blank"><img src="${annotated_desktop_2}" style="display: block;"></a>
        </div>
        <div class="caption-text-block" style="box-sizing: border-box; margin-top: 1rem !important;">Desktop viewport redesign mockup.</div>
         -->

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">3: RESPONSIVE REDESIGN</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">IMPLEMENTATION</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="">
                <div tabIndex="0" class="text-block">
                    Finally, we implemented the mockup using basic HTML and CSS, leveraging media breakpoints
                    to achieve dyanmic resizing and relayout as page sizes change between desktop and mobile viewing.
                    Toggling visibility with different desktop/mobile versions of the same component
                    helped with especially tricky relayouts as shown in the above mockups.
                    Check out the result
                    <a href="/daniel-smith-redesign">here</a>! An embedded iframe of the webpage can also be found below: 
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>

        <iframe style="border: 1px solid rgba(0, 0, 0);  aspect-ratio: 1.75" width="100%" src="/daniel-smith-redesign" allowfullscreen></iframe>
        

        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">REFLECTION</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    In a world where users are viewing webpages from a wider and wider variety of devices,
                    each with their own aspect ratio, designing responsive pages is more important than ever.
                    This project has explored increased usability of a shopping website that artists frequent,
                    especially targeting responsiveness as a key focus.
                </div>
            </div>
            <div class="column-B">
            
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