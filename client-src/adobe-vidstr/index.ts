import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import page_1 from 'url:./screenshots/page_1 Large.jpeg';
import page_2 from 'url:./screenshots/page_2 Large.jpeg';
import page_3 from 'url:./screenshots/page_3 Large.jpeg';
import page_4 from 'url:./screenshots/page_4 Large.jpeg';

import ally_1 from 'url:./screenshots/ally_1.jpeg';
import ally_2 from 'url:./screenshots/ally_2.png';

import style_sheet from 'url:./screenshots/style_sheet.jpg';

import annotated_phone_both from 'url:./screenshots/annotated_phone_both.jpeg';
import annotated_tablet_1 from 'url:./screenshots/annotated_tablet_1.jpeg';
import annotated_tablet_2 from 'url:./screenshots/annotated_tablet_2.jpeg';
import annotated_tablet_both from 'url:./screenshots/annotated_tablet_both.jpeg';
import annotated_desktop_1 from 'url:./screenshots/annotated_desktop_1.jpeg';
import annotated_desktop_2 from 'url:./screenshots/annotated_desktop_2.jpeg';

import img_1 from 'url:./assets/video_comp.png';
import img_2 from 'url:./assets/video_comp_bad.png';
import img_3 from 'url:./assets/media_examples.png';

import img_4 from 'url:./assets/word_splats.png';
import img_5 from 'url:./assets/llm_figure.png';
import img_6 from 'url:./assets/whiteboarding.jpg';
import img_7 from 'url:./assets/milp_figure.png';
import img_8 from 'url:./assets/overleaf.png';
import img_9 from 'url:./assets/expert_interviews.png';
import img_10 from 'url:./assets/presenting.jpg';
import img_11 from 'url:./assets/final.jpeg';

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

@customElement('vidstr-page')
export class HelloWorld extends LitElement {
    static styles = [css_resets, css`
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

        .page-pic-container {
            border: 1px solid black;
            width: 100%; 
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
    `];

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        return html`
        <div class="margin-top-4rem"></div>

        <div tabIndex="0" class="grid-row-full-column">
            <h1 class="small-preheader-bold">Video composition retargeting at</h1>
            <h1 class="xl-big-header">Adobe Research</h1>
            
        </div>
        <div class="grid-row">
            <div tabIndex="0" class="column-A text-block margin-top-1rem">
                In summer 2024, I interned at Adobe Research in the CAVA group (co-creation for audio, video, and animation) working on video composition retargeting.
                I developed a tool, VidSTR, to support this kind of AI-powered video editing.
                This work culminated in a paper that was accepted to CHI '25 which I presented in Yokohama, Japan 🇯🇵.
            </div>
            <div class="column-B">
                <div style="text-align: right; width: 100%" class="small-preheader margin-top-1rem">
                    Adobe Research <br> Research Scientist Intern, 2024
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">1: PROBLEM STATEMENT</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: WHAT IS RETARGETING?</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    I was recruited by my Adobe mentors Stephen DiVerdi and Mackenzie Leake to work on the video composition retargeting problem.
                    Let's first define what a video composition is:
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        A document in any digital editing
                        video tool comprising of a single
                        video with multiple graphical elements placed on top, appearing
                        at times and in positions that are “aligned” with the content of the
                        video.
                    </div>
                    <br><br>
                    Video composition retargeting is the process of taking a video composition and adapting it to a new video.
                    For instance I have an original video take and I swap it out for a new take (e.g. bad hair day). 
                    The act of <b>realigning the graphics of the composition</b> is what we mean whem we say "retargeting".
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container">
                    <img src="${img_1}" class="" style="clip-path: inset(0 0 1rem 0); margin-bottom: -1rem;">
                </div>
                <div class="caption-text-block" style="margin-top: 1rem !important; text-align: center;">
                    An example video composition with a performer and graphical overlays relevant to the video content.
                    This original video composition is created manually by a video editor.
                </div>
            </div>
        </div> 

        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Why is this important? Again, consider the very common scenario where you swap an old video for a new video.
                    The new video potentially has many differences (e.g. speech cadence, wordings, performer) 
                    that force the editor to redo their edits.
                    This is a time-consuming process that can be automated with AI.
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        Here we present our system VidSTR: a one-click solution for retargeting video compositions
                        across different video takes.
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container">
                    <img src="${img_2}" class="" style="clip-path: inset(0 0 1rem 0); margin-bottom: -1rem;">
                </div>
                <div class="caption-text-block" style="margin-top: 1rem !important; text-align: center;">
                    An example of swapping in a new video take where the performer position changes.
                    One issue is that the graphical overlays may now overlap with the performer.
                </div>
            </div>
        </div> 


        <div class="grid-row grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: SCOPING THE PROJECT</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Video editing spans a wide range of workflows and output formats. 
                    Instead of supporting every possible video editing workflow, we chose to focus the project to a specific use case:
                    speech-driven performances. This is a common media format on social media.
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        Scoping the project to a compelling subset of the problem space
                        is necessary for a successful 12-week internship. 
                        Planning out the project scope sets clear expectations and achievable deadlines.
                    </div>
                    <br><br>
                    Importantly, speech-driven performances mean that the video content is driven by the performer's speech.
                    Therefore we can use the speech content to inform the retargeting process.
                    Similarly a performer is a simple region of interest to avoid to do (geometric) content awareness. 
                    <br><br>
                    On the right are examples of the speech-driven performance videos we target in this project.
                    I created these demos with my fellow intern co-workers as actors.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div class="page-pic-container">
                    <img src="${img_3}" class="" style="">
                </div>
            </div>
        </div>
        

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">2: TEMPORAL RETARGETING</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: ATTEMPTING WORD SPLATS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    With speech-driven video, we can work with a transcript representation with per-word timestamps.
                    Starting off simple, I tried an n-grams approach where each word votes on where an asset should appear in the new transcript.
                    This was also combined with voting on gesture movement symbols.
                    Each vote is a gaussian "splat" that we sum to get a likelihood distribution to maximize.
                    <br><br>
                    While this approach worked for naive retargeting scenarios, it was not robust to more complex changes such as synonym rewording,
                    speech cadence changes, and ordering/content changes.
                    This got me thinking about what tool or representation was richer and more flexible than rigid n-grams.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${img_4}" target="_blank">
                    <img src="${img_4}" style="border: 1px dashed black;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important; text-align: center;">
                    The initial gaussian word splat voting approach visualized. 
                    The individual peaks are the word and gesture splats, and the dotted line is the summed splat likelihood distribution.
                </div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: LLMS AS AN ALTERNATIVE</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Large language models are a recent development that have powerful NLP capabilities that show emergent reasoning abilities.
                    I was curious if LLMs could be used to retarget video compositions!
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        I constructed prompts to instruct an LLM to perform retargeting by finding "corresponding locations" for assets &mdash;
                        basically putting our problem into technical writing language. 
                        <br><br>
                        Natural language is a rich but ambigious representation over code and precision over word choice was key to reliable model performance.
                    </div>
                    <br>
                    The LLM was able to find corresponding locations for assets in the new transcript through keyword and surrounding sentence matching.
                    It addressed all the n-gram issues with ease and we moved ahead with this approach.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${img_5}" target="_blank">
                    <img src="${img_5}" style="">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">
                    Our LLM-powered temporal retargeting pipeline explained.
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">3: SPATIAL RETARGETING</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: REPOSITIONING NIGHTMARES</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Next, the spatial retargeting problem is fundamentally a geometric problem 
                    between the bounding boxes of our graphical assets and key regions of interest (i.e. the performer).
                    Finding an optimal layout is challenging due to exponential constraint considerations as the number of assets increase.
                    <br><br>
                    Brainstorming ideas with my mentor Steve, we imagined geometric transformations based around mirroring 
                    and preserving white-space ratios would work with individual assets. 
                    However, how would multi-asset compositions work? 
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${img_6}" target="_blank">
                    <img src="${img_6}" style="border: 1px dashed black;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">
                    Our whiteboard brainstorming on spatial retargeting.
                </div>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: ENTER INTEGER PROGRAMMING</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Back in Spring 2023, I took a course on linear programming in the context of polytope theory.
                    This <b>obscure knowledge came in handy</b> when I discovered that all the auto-layout algorithm literature was based on linear programming derivatives.
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        My niche interest in polytope theory allowed me to quickly understand and extend a mixed-integer linear programming (MILP) approach to our problem.
                    </div>
                    <br>
                    The key to MILPs is they separate optimization of a problem's objective from a problem's constraints. 
                    This comes at the expense of infeasible solutions which can be dealt with a relaxation schedule.
                    Here I set up the problem to individually position each asset with geometric rules (covered in 3A) and resolve conflicts all at once with padding.
                    Therefore we find the layout closest to composition-preserving locations!
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${img_7}" target="_blank">
                    <img src="${img_7}"">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important; text-align: center;">
                    Click on the image to view a figure explaining our complete spatial retargeting approach in full resolution.
                    Notably there are two stages: (1) individual asset positioning and (2) multi-asset conflict resolution.
                </div>
            </div>
        </div>

        <div class="grid-row margin-top-1rem">
            <div class="">
                <div tabIndex="0" class="text-block">
                    With the big approach to both temporal and spatial retargeting in place,
                    our algorithmic pipeline was more or less complete and we decided on a hail-may submission to CHI '25. 
                    At that point we only had four weeks to prepare a complete paper. 
                    All hands were on deck to complete the major tasks left.
                </div>
            </div>
        </div>

        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">4: PAPER WRITING</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: SPRINT TO CHI DEADLINE</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    In four weeks, I had the following tasks to complete:
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        1. Finish implementing the VidSTR system <br>
                        2. Film technical evaluation clips <br>
                        3. Run and write up statistical analysis <br>
                        4. Create all 14 figures in Adobe Illustrator <br>
                        5. Write the full paper
                    </div>
                    <br>
                    In retrospect, this was the hardest I have ever worked in my life to get all these tasks done while still mainting a high standard.
                    After all, we were submitting to CHI &mdash; the premier HCI conference.
                    <br><br>
                    I was also being offboarded, moving back to campus, and starting the first two weeks of classes as an undergrad.
                    I could not have done this without the support of my mentors who were absolute champions with their advice 
                    that helped me get (1) through (4) done ASAP and their assistance with (5).
                    <br><br>
                    This was truly a team effort!
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${img_8}" target="_blank">
                    <img src="${img_8}" style="border: 1px dashed black;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Many sleepless nights spent in the Overleaf LaTeX editor.</div>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: REVISE AND RESUBMIT</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    The reviews came back two months later and we were glad to see that we had received a "revise and resubmit" decision.
                    This meant that we had a chance to address the reviewers' comments and resubmit the paper for a second round of review.
                    <br><br>
                    Key comments were:
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        1. Lack of user evaluation <br>
                        2. Algorithmic design choices were unclear <br>
                        3. Motivating LLMs over other NLP strategies <br>
                    </div>
                    <br>
                    After planning our strategy with Steve and Mackenzie who were experienced with the paper revision process,
                    I conducted expert interviews to address (1) and gather more feedback to strengthen our understanding of how VidSTR was and was not helpful to video editors.
                    Some rewriting was necessary to address (2), and I ran experiments comparing LLM benefits over dynamic time warping for (3). 
                    <br><br>
                    A busy month of interviews, rewriting, experiments, and undergrad courseload later, I submitted our revisions!
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${img_9}" target="_blank">
                    <img src="${img_9}" style="border: 1px dashed black;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Our expert interview feedback that I added to the paper during revisions.</div>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART C: PREPARING + PRESENTING</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    In January, we received the good news that our paper was accepted.
                    I then began preparations for the CHI conference which was being held in Yokohama, Japan for 2025. 
                    Creating the camera-ready version, video demo, and presentation slides were all on my plate.
                    It was all worth it once I got to present in-person in April
                    <br><br>
                    <div style="padding: 2rem; background-color: rgba(0, 0, 0, 0.1)">
                        Conference attending was an invaluable experience for me as an undergrad.
                        I was able to meet and network with experts in the subfield and
                        gain both perspective and inspiration for my future research.
                    </div>
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <a href="${img_10}" target="_blank">
                    <img src="${img_10}" style="border: 1px dashed black;">
                </a>
                <div class="caption-text-block" style="margin-top: 1rem !important;">Me presenting in the video making session at CHI '25!</div>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART D: REFLECTION</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Interning at Adobe Research was one of the most transformative experiences of my life.
                    I am forever grateful to my mentors for this opportunity and their guidance and support throughout the entire process.
                    This internship was a true test of my abilities and I am proud of the work I accomplished.
                    It also cemented for me that this was the work I want to do with my life.
                    <br><br>
                    Definitely a summer to remember :)
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_11}" style="border: 1px dashed black;">
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