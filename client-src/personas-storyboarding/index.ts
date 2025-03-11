import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import img_sketch_1 from 'url:./screenshots/sketch_1.png';
import img_sketch_2 from 'url:./screenshots/sketch_2.png';
import img_personas_1 from 'url:./screenshots/persona_1.png';
import img_personas_2 from 'url:./screenshots/persona_2.png';

import img_observation_1 from 'url:./screenshots/observation_1.jpg';
import img_observation_2 from 'url:./screenshots/observation_2.png';

import img_interview_1 from 'url:./screenshots/interview_1.png';
import img_interview_2 from 'url:./screenshots/interview_2.png';
import img_interview_3 from 'url:./screenshots/interview_3.png';

import panel_1 from 'url:./screenshots/panel_1.png';
import panel_2 from 'url:./screenshots/panel_2.png';
import panel_3 from 'url:./screenshots/panel_3.png';
import panel_4 from 'url:./screenshots/panel_4.png';
import panel_5 from 'url:./screenshots/panel_5.png';
import panel_6 from 'url:./screenshots/panel_6.png';
import panel_7 from 'url:./screenshots/panel_7.png';
import panel_8 from 'url:./screenshots/panel_8.png';
import panel_9 from 'url:./screenshots/panel_9.png';
import panel_10 from 'url:./screenshots/panel_10.png';
import panel_11 from 'url:./screenshots/panel_11.png';

@customElement('personas-storyboarding')
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
    `;

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        return html`
        <div class="margin-top-4rem"></div>

        <div tabIndex="0" class="grid-row-full-column">
            <h1 class="small-preheader-bold">Persona storyboarding for</h1>
            <h1 class="xl-big-header">Printer Interfaces</h1>
            
        </div>
        <div class="grid-row">
            <div tabIndex="0" class="column-A text-block margin-top-1rem">
                For CSCI 1300, Interaction Design at Brown University, I have chosen to study how students use printer interfaces on campus.
                This page introduces an overview of the interface, interviews with users, and the development of user personas with storyboards. 
            </div>
            <div class="column-B">
                <div style="text-align: right; width: 100%" class="small-preheader margin-top-1rem">
                    CSCI 1300 <br> Personas and Storyboarding
                </div>
            </div>
        </div>

        <section id="section 1, inputs and outputs" 
            role="region" 
            aria-labelledby="section-1-h1">
        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">1: THE INTERFACE</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: PRINTER INTERFACES</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    We begin our study at the printer station in Page-Robinson Hall at 69 Brown St, Providence RI.
                    Two machines are located here, one for B&W and one for color printing, where students swipe their ID cards to use.
                    Points of interest include the printer's screen with its attached card reader, the paper trays, and the output tray where students pick up their prints.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_sketch_1}" style="clip-path: inset(3rem 0 0 0); margin-top: -4rem; margin-bottonm: 2rem;">
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Notably, students must upload their documents to an internal Brown "MyPrint" server before printing.
                    This must be done on a separate device, and there is not an option to use the printers with local files, e.g. through a USB drive or SD card.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_sketch_2}" style="width: 80%">
                <div class="caption-text-block" style="margin-top: 1rem; margin-bottom: 1rem;">
                    The MyPrint server web interface which must be accessed on a separate device.
                </div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    To better understand user experiences with the on-campus printers, I prepared four questions to center inteviews 
                    around when observing printer use in Page-Robinson Hall.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div tabIndex="0" class="text-block right-text-block-special">
                    1. What are you printing today and how often do you need to print for this reason?
                    <br><br>
                    2. Can you share a moment when the printer interface surprised or challenged you or completely broke?
                    <br><br>
                    3. Do you have any pain points or frustations on using the printing system on campus?
                    <br><br>
                    4. Are there alternatives to printing out documents that you prefer, and why are you here printing instead?
                    <br><br>
                </div>
            </div>
        </div>


        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: USER OBSERVATION</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    I first observed people who came in throughout the afternoon, and overall, students used the printer in similar sequence of steps: 
                    (1) swiping the ID card to login, 
                    (2) pressing the print release button, 
                    (3) wait for the printer to print, and
                    (4) pick up the prints from the output tray. 
                    <br><br>
                    Key moments of friction observed across students was in (1) the machine often failed to read a single card swipe but registering two swipes would cancel the login entirely.
                    Students swiped with a variety of frustrated patterns when trying to log in.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_observation_1}" style="width: 65%; clip-path: inset(0 0 0 3px);">
                <div class="caption-text-block" style="margin-bottom: 4rem">
                    The Brown Card's magnetic stripe wears down over time so students may swipe multiple times to get it to register. 
                    However, this can also cause the printer to cancel the login entirely which is what makes the interaction difficult.
                </div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    With (2), the majority of students used the "Print All" button which released all queued prints. However, some released
                    their prints individually which took longer but displayed print settings, cost, and file names which are not initially shown.
                    <!-- One student saw they meant to print in color but queued a B&W print instead&mdash;reuploading to MyPrint was a prompt remedy. -->
                    <br><br>
                    Finally, a common workflow was when students made flyers and posters would have their laptops open nearby. They would send a draft to MyPrint,
                    review the printed result, and then return to their laptop to make iterative (fine-grained) changes.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_observation_2}" style="width: 63%; clip-path: inset(0 0 0 3px);">
                <div class="caption-text-block">
                    The printer's PaperCut MF interface with the "Print All" button. 
                    Notice that the print job descriptions are hidden unless the user clicks into "Print Release". 
                    Using "Print All" also removes the print jobs entirely so there is no way to go back and see what was released.
                </div>
            </div>
        </div>


        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART C: USER INTERVIEWS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Next I conducted semi-structured interviews with three of the students I observed.
                    Most users printed class materials such as homework assignments and notes, particularly for studying and open-note exams.
                    A common theme was that <b>students preferred to do work on tablets but the printed document was useful as a supplement</b> 
                    instead of switching between windows on their laptop.
                    <br><br> 
                    Although students generally own laptops and tablets, the printer is still a popular necessity and has many regular users. 
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_interview_1}" style="width: 80%; margin-bottom: 4rem;">
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Students also noted <b>they were often in a rush to print</b>, and the printer was a <b>last-minute stop</b> on their way to class. 
                    This lead to irritation when the printer interface was slow to log in and even spelled disaster when the MyPrint server failed to sync with the printer.
                    The inability to print locally was a shared pain point because they had to upload their files and deal with an unreliable queue system.
                    <br><br>
                    Along this line, there was broader desire for <b>more printer access on campus</b>. Many machines are restricted to departments and their graduate students,
                    so undergrads may have to walk across campus to find a printer that they can use.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_interview_2}" style="width: 70%;  margin-right: 2rem;">
            </div>
        </div>


        <section id="section 1, inputs and outputs" 
            role="region" 
            aria-labelledby="section-1-h1">
        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">2: PERSONAS</h1>
            </div>
        </div>        
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    With these findings we now develop two personas that represent different spectrums of the users of college campus printers. 
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PERSONA 1: BUSY BETTY</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    "Busy Betty is an ambigious pre-law student who is taking five classes and working part-time at the library.
                    She has ten minutes between the end of her shift and her next class, and she needs to print out the upcoming lecture's handout."
                    <br><br>
                    This persona represents the many students who are in a rush to use the on-campus printers for their academics, have little time, and are
                    perpetually on-edge and overstressed. Printer dysfunctionality is the last problem they need to face.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_personas_1}">
            </div>
        </div>
        <div class="grid-row margin-top-2rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PERSONA 2: TECHNICAL TERENCE</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    "Technical Terence is a visual art concentrator and aspiring graphic designer.
                    They are making flyers for their first show in LIST art center and needs to get the colors just right."
                    <br><br>
                    This persona represents students that use the campus printers as a tool for their creative work. 
                    People make flyers, posters, and artwork with these printers which turn into a step of their creative workflow 
                    with iteration and trial and error.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_personas_2}">
            </div>
        </div>

        <section id="section 1, inputs and outputs" 
            role="region" 
            aria-labelledby="section-1-h1">
        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">3: STORYBOARDING</h1>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    We conclude this survey with a storyboard for a day in Technical Terence's life before their first show in Brown's LIST art center. 
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
            </div>
        </div>

        <div class="grid-row margin-top-1rem grid-container-4x3">
            <div class="grid-item margin-top-2rem" style="">
                <img src="${panel_1}">
                <div tabIndex="0" class="text-block grid-caption">
                    1. Terence has finished their studio and thinks about the rest of their schedule for the day.
                    It's time to work on the poster for their show in LIST.
                </div>
            </div>
            <div class="grid-item margin-top-4rem" style="">
                <img src="${panel_2}">
                <div tabIndex="0" class="text-block grid-caption">
                    2. Terence packs up their laptop and heads off to Page-Robinson Hall to work with the color printers there.
                </div>
            </div>
            <div class="grid-item margin-top-6rem" style="">
                <img src="${panel_3}">
                <div tabIndex="0" class="text-block grid-caption"> 
                    3. They set up at a table with their laptop and a sketchbook. 
                    They export the current draft of their poster in Illustrator as a PDF and uploads it to Brown's MyPrint.
                </div>
            </div>


            <div class="grid-item" style="">
                <img src="${panel_4}">
                <div tabIndex="0" class="text-block grid-caption">
                    4. Terence swipes their Brown Card to log in and release the print job.
                    They wait for a minute before the server syncs up and the file appears in the queue.
                </div>
            </div>
            <div class="grid-item margin-top-4rem" style="">
                <img src="${panel_5}">
                <div tabIndex="0" class="text-block grid-caption">
                    5. The salmon color on the poster doesn't turn out right. Terence debates on how much increase in chroma they'd like.
                    Settling on a deep vermillion, they upload another print job.
                </div>
            </div>
            <div class="grid-item margin-top-8rem" style="">
                <img src="${panel_6}">
                <div tabIndex="0" class="text-block grid-caption">
                    6. Terence swipes their Brown Card to log in and release the print job. 
                    They also think about using a CMYK PDF color profile for better color matching.
                </div>
            </div>

            <div class="grid-item" style="">
                <img src="${panel_7}">
                <div tabIndex="0" class="text-block grid-caption">
                    7. The card reader has trouble reading the Brown card so Terence swipes multiple times. 
                    However, it gets read twice this time and doesn't login again which irritates Terence.
                </div>
            </div>

            <div class="grid-item margin-top-4rem" style="">
                <img src="${panel_8}">
                <div tabIndex="0" class="text-block grid-caption">
                    8. Terence iterates on various aspects of design, inspecting the printed results.
                    Terence must go through the MyPrint server every time despite laptop and printer being right there. 
                    They wishes a USB drive could be used.
                </div>
            </div>

            <div class="grid-item margin-top-8rem" style="">
                <img src="${panel_9}">
                <div tabIndex="0" class="text-block grid-caption">
                    9. After many versions, Terence is finally satisfied with the poster. 
                    They hold it up to various light sources and is pleased with how it holds up under different conditions.
                </div>
            </div>

            <div class="grid-item" style="">
                <img src="${panel_10}">
                <div tabIndex="0" class="text-block grid-caption">
                    10. Terence now prints out fifty copies of the final poster to post up around campus. 
                    They also plan on putting the poster into their portfolio website.
                </div>
            </div>

            <div class="grid-item margin-top-4rem" style="">
                <img src="${panel_11}">
                <div tabIndex="0" class="text-block grid-caption">
                    11. Terence is very excited for the poster to be seen and wants to start promotion ASAP.
                    They begin walking around campus posting them up.
                </div>
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