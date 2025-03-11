import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import img_google_docs_1 from 'url:./screenshots/google_docs_1.png';
import img_google_docs_2 from 'url:./screenshots/google_docs_2.png';
import img_google_docs_3 from 'url:./screenshots/google_docs_3.png';
import img_google_docs_4 from 'url:./screenshots/google_docs_4.png';

import img_photoshop_1 from 'url:./screenshots/photoshop_1.png';
import img_photoshop_2 from 'url:./screenshots/photoshop_2.png';
import img_photoshop_3 from 'url:./screenshots/photoshop_3.png';
import img_photoshop_4 from 'url:./screenshots/photoshop_4.png';

import img_discord_1 from 'url:./screenshots/discord_1.png';
import img_discord_2 from 'url:./screenshots/discord_2.png';
import img_discord_3 from 'url:./screenshots/discord_3.png';
import img_discord_4 from 'url:./screenshots/discord_4.png';

import img_state_google_1 from 'url:./screenshots/state_google_1.png';
import img_state_google_2 from 'url:./screenshots/state_google_2.png';
import img_state_revised_1 from 'url:./screenshots/state_revised_1.png';
import img_state_revised_2 from 'url:./screenshots/state_revised_2.png';
import img_figma_redesign from 'url:./screenshots/figma_redesign.png';

import img_redesign_1 from 'url:./screenshots/redesign_1.png';
import img_redesign_2 from 'url:./screenshots/redesign_2.png';

@customElement('accessible-components')
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

        .margin-top-4rem {
            margin-top: 4rem;
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
    `;

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        return html`
        <div class="margin-top-4rem"></div>

        <div tabIndex="0" class="grid-row-full-column">
            <h1 class="small-preheader-bold">Redesigning the</h1>
            <h1 class="xl-big-header">Dropdown Menu</h1>
            
        </div>
        <div class="grid-row">
            <div tabIndex="0" class="column-A text-block margin-top-1rem">
                For CSCI 1300, Interaction Design at Brown University, I have chosen to survey and redesign the dropdown menu component.
                This page covers example modes of input, the corresponding visual feedback, and an underlying state model. 
                A redesign of the Edit dropdown for Photoshop comes at the end.
            </div>
            <div class="column-B">
                <div style="text-align: right; width: 100%" class="small-preheader margin-top-1rem">
                    CSCI 1300 <br> Accessible Components
                </div>
            </div>
        </div>

        <section id="section 1, inputs and outputs" 
            role="region" 
            aria-labelledby="section-1-h1">
        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-1-h1" tabIndex="0" class="big-header">1: INPUTS & OUTPUTS</h1>
            </div>
        </div>
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: SURVEY</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    We begin our survey with Google Docs' file bar dropdown. 
                    Hovering over the menu button highlights it. 
                    Without interaction, it is just text against a flat background.
                    Both hovering and clicking on a nested menu item (indicated by the right-facing triangle) will open sub-menus that expand to the right relative to the item. 
                    I am able to move around with the arrow keys as if they were a mouse snapping to the next connected item.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_google_docs_1}" alt="google docs top bar with cursor hovering over view button">
                <img src="${img_google_docs_2}" class="margin-top-1rem" alt="google docs with view dropdown open">
                <img src="${img_google_docs_4}" class="margin-top-1rem" alt="google docs with view dropdown open and mode sub-dropdown open">
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    The dropdown menus in Photoshop are indicated with a caron symbol and are outlined with a darkened background. 
                    They do not change state on hover. Clicking opens the dropdown menu which uses the system UI rendering, at least for Mac Photoshop. 
                    The selected “custom” option appears aligned with the original menu position with others trailing below.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_photoshop_1}" alt="photoshop top bar centered around mixing mode dropdown button">
                <img src="${img_photoshop_2}" class="margin-top-1rem" alt="photoshop with mixing mode dropdown open">
                <img src="${img_photoshop_4}" class="margin-top-1rem" alt="photoshop with flow slider dropdown open">
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Many configurable locations in Discord, such as text channels, have option menus. 
                    When you hover and click on these locations, they can become highlighted which is “button”-like and indicates potential configurability. 
                    The dropdown menu to interact with a text channel appears on a right click which is not immediately intuitive. 
                    Left click uses the channel (changes app state) while right click configures the channel (opens dropdown).
                    Interactions follow similarly from Google Docs and Photoshop.
                </div>

                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_discord_1}" alt="discord with text channel hovered">
                <img src="${img_discord_2}" class="margin-top-1rem" alt="discord with text channel config dropdown open">
                <img src="${img_discord_4}" class="margin-top-1rem" alt="discord with text channel config dropdown open and mute channel sub-dropdown open">
            </div>
        </div>

        <div class="grid-row margin-top-4rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: REFLECTIONS</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block has-dropcap">
                    1 Having used computers for many years, I have a certain list of expectations for dropdown menus: that they would open below the origin button, that they would open submenus to the right, that submenus often exist in the first place, and so on. 
                    I was surprised by the consistency across three different platforms where main dropdown menus don’t exit until you click outside of them, 
                    that the Enter key functions as a click in the menu, and more.
                    Most of the differences are not interaction differences but visual differences in terms of color, highlight/accent colors, and the information within the menu items. 
                </div>
            </div>
            <div class="column-B">
                <div tabIndex="0" class="text-block has-dropcap">
                    2 I experimented with keyboard interactions while using the dropdown menu and the Enter key as well as the Left / Up / Right / Down keys functioned as expected in moving up / down the selected item list and entering / exiting sub menus. 
                    However when using other keys like tab or letter keys, either nothing happened or random selections occured. 
                    Dragging interactions were interesting in that while they don’t do anything functionally, the mouse up event counts as clicking out of the main menu on Discord but not for Google Docs. 
                    For both Discord and Google Docs, dragging to “cancel” an action does not click and select on an item while it does for Photoshop. 
                    These very fine-grained interaction differences are pretty interesting to think about since there isn’t much of a standard.
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        <div class="grid-row margin-top-2rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block has-dropcap">
                    3 The navigation functionality of opening the dropdown, opening submenus, and clicking on items is learnable and memorable because of the helper symbols and highlighting. 
                    I would say opening the dropdown is not as learnable since you need to know something has a dropdown inside to begin with, 
                    and Discord’s right click to open dropdown is not learnable at all without prior knowledge.
                    The efficiency of the navigation functionality is good for dropdown menus that don’t have any submenus (two clicks needed) but once submenus are involved, you need to click more, 
                    wait for submenus to open, deal with accidentally exiting submenus, and so on. 
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div tabIndex="0" class="text-block has-dropcap">
                    4 I would say Google Docs does best, relatively speaking, on accessibility due to the arrow keys being friendly to use and menu items have both a (consistent) icon as well as text label to indicate their individual functionalities. 
                    Since Photoshop often uses the system UI for dropdowns, it does pretty good on these aspects as well. 
                    Its own custom dropdown menu for things like sliders is not great because there’s no indicator on how to use the custom dropdown contents without prior knowledge and the clickable regions are small. 
                    Discord seems to have a mix of both in that it does well having smooth mouse/keyboard interactions but the right-click to open is not accessible. 
                    However, the screen reader is unusable for Google Docs and Discord.
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>

        <div class="grid-row margin-top-4rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART C: INPUTS SUMMARIZED</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <table>
            <colgroup>
                <col style="width: 10%;">
                <col style="width: 30%;">
                <col style="width: 30%;">
                <col style="width: 30%;">
            </colgroup>
            <tr>
                <th></th>
                <th class="table-header">Google Docs</th>
                <th class="table-header">Photoshop</th>
                <th class="table-header">Discord</th>
            </tr>
            <tr>
                <td class="table-header">MOUSE</td>
                <td>
                    Main menu click to open/close, submenus hover to open/close <br><br>
                    Click-drag does not close menu or select item
                </td>
                <td>
                    Main menu click to open/close, submenus hover to open/close <br><br>
                    Click-drag does not close menu but does select item <br><br>
                    Custom menus have small clickable area
                </td>
                <td>
                    Main menu click to open/close, submenus hover to open/close <br><br>
                    Click-drag closes menu but does not select item <br><br>
                    Need to use right click to open some dropdowns, not obvious to new user
                </td>
            </tr>
            <tr>
                <td class="table-header">KEYBOARD</td>
                <td>
                    Up/Down arrow keys move up and down menu, Left/Right arrow keys enter and exit submenus <br><br>
                    Left/Right arrow keys when no submenu left unexpectedly switch main menu 
                </td>
                <td>
                    Up/Down arrow keys move up and down menu, Left/Right arrow keys enter and exit submenus <br><br>
                    Arrow keys are integrated with custom content like sliders within a dropdown
                </td>
                <td>
                    Up/Down arrow keys move up and down menu, Left/Right arrow keys enter and exit submenus
                </td>
            </tr>
            </table>
        </div>

        <div class="grid-row margin-top-4rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART D: OUTPUTS SUMMARIZED</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <table>
            <colgroup>
                <col style="width: 10%;">
                <col style="width: 30%;">
                <col style="width: 30%;">
                <col style="width: 30%;">
            </colgroup>
            <tr>
                <th></th>
                <th class="table-header">Google Docs</th>
                <th class="table-header">Photoshop</th>
                <th class="table-header">Discord</th>
            </tr>
            <tr>
                <td class="table-header">MAIN MENU OPENING</td>
                <td>
                    Hovering over the button that opens the dropdown creates a rounded darker highlight (impression of a button → clickable). There isn’t an option to “focus” this menu before opening.
                </td>
                <td>
                    No reaction to mouse hover or click other than the menu opening. However, it has a dark background, light rounded outline, and caron symbol so it looks like it opens a clickable dropdown.
                </td>
                <td>
                    Hovering over the configurable item gives it a lighter background highlight and the text also lightens accordingly. Like with Google Docs, we get the impression of a button or something clickable.
                </td>
            </tr>
            <tr>
                <td class="table-header">SELECTED STATE</td>
                <td>
                    Within the menu, the selected item has the same rounded, darker highlight from the main menu opening. If a submenu is open, the item that opens the submenu in the main menu (or prior submenu) is still highlighted the same way. Highlight and selection are not differentiated (I think they are the same here).
                </td>
                <td>
                    Once selected, the system UI often covers the button and is a big contrast to the internal app’s styling so we can clearly see the menu. The custom non- system UI doesn’t give any indication of what’s selected, especially since these are used with custom inputs instead whose effects just apply.
                </td>
                <td>
                    Within the menu, the selected item has the background of Discord’s accent color “Blurple” and the text lightens to white. Danger items are given an accent color of red. If a submenu is open, the item that opens the submenu in the main menu (or prior submenu) is still highlighted. Highlight and selection are not differentiated.
                </td>
            </tr>
            <tr>
                <td class="table-header">COLOR CONTRAST</td>
                <td>
                    Good contrast all around in the app, light (near white) background with dark (near black) text. No accent color.
                </td>
                <td>
                    System UI dropdowns have good contrast with light background and dark text. Custom dropdowns have bad contrast since the text / other elements (e.g. slider) is too dark on top of dark grey background (should be white, not light grey, on top grey)
                </td>
                <td>
                    Good contrast all around in the app, dark (grey) background color with very light (near white) text. This dark mode works and is much better than Photoshop’s dark mode which has contrast issues. Text lightens with accent color to maintain contrast. 
                </td>
            </tr>
            <tr>
                <td class="table-header">FOCUS ORDER</td>
                <td>
                    Arrow keys work logically as covered in part 1. Tab key does not work at all since it closes the dropdown. No focus order.
                </td>
                <td>
                    Arrow keys work logically as covered in part 1. Tab key unexpectedly resets the selected item choice so arrow keys must be used.
                </td>
                <td>
                    Arrow keys work logically as covered in part 1. Tab key works in other parts of Discord UI but not the dropdown specifically so cannot tell what the focus order is.
                </td>
            </tr>
            <tr>
                <td class="table-header">SCREEN READER</td>
                <td>
                    I am not able to access the File, Edit View, etc. banner from using just the screen reader and keyboard. Google Docs seems to go from the top navbar items (i.e. title, share, account) directly into the document tools. <br><br>
                    When I manually open the view dropdown, the screen reader is able to read the main menu items, but it gets confusing with the submenu items that are not sufficiently differentiated. The screen reader keyboard shortcuts also just don’t work, only the Google Doc provided ones. There are also some words like “space” that add confusion.
                </td>
                <td>
                    The screen reader with the system UI prompts works really well and the keyboard shortcuts to navigate with MacOS’ VoiceOver work perfectly, for instance I can direct the screen reader to open and select what I want. <br><br>
                    However, the custom dropdown (i.e. the slider) doesn’t work and the screen reader reads out some nonsense. 
                </td>
                <td>
                    There isn’t any indication on how to enter the dropdown menu (requiring right click) for the screen reader which is bad.  <br><br>
                    However once I’m in it, I am able to navigate through the screen reader’s keyboard shortcuts and do all the tasks I want to do. It’s interesting that the screen reader sees Discord as a web application and navigation is between different “web areas” that are parsed correctly. I wonder if it’s because Discord is an Electron app…
                </td>
            </tr>
            </table>
        </div>
        </section>

        <section id="section 2, state models"
            role="region"
            aria-labelledby="section-2-h1">
        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-2-h1" tabIndex="0" class="big-header">2: STATE MODELS</h1>
            </div>
        </div>        
        <div class="grid-row">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART A: GOOGLE DOCS DROPDOWN</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Here, we formalized our observations in <span style="font-family: Wulkan Display Bold; line-height: 1;">1: INPUTS & OUTPUTS</span> into a state model for mouse users of Google Docs' dropdown menu.
                    Interestingly, the main dropdown menu close through changing focus (e.g. click away) while the sub-dropdown menus close upon mouse leave (e.g. no longer hovering).
                    This pattern was common across all dropdown menu implementations surveyed. 
                    Sub-dropdown states are contained within the main dropdown state, valid on a continuous mouse hover.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img style="margin-top: 2px;" src="${img_state_google_1}" alt="flow chart describing the state model of mouse user in google docs dropdown">
            </div>
        </div>
        
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Again, we formalize the state model for Google Docs' dropdown menu but this time we focus on keyboard users. 
                    Navigation is driven by the arrow and enter keys, and tabbing through is not possible for the focus order switches to the next overall dropdown (e.g. View menu into Insert menu).
                    While the sub-dropdown states are still contained within the main dropdown state, entering and exiting is contingent on discrete arrow key events and not the continuous mouse hover.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img style="margin-top: 2px;" src="${img_state_google_2}" alt="flow chart describing the state model of keyboard user in google docs dropdown">
            </div>
        </div>
        <div class="grid-row margin-top-4rem">
            <div class="expand-full-width">
                <h2 tabIndex="0" class="right-align-header">PART B: PHOTOSHOP DROPDOWN REDESIGN</h2>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    Now, I have chosen to redesign Photoshop’s Edit dropdown component where I’m adding a “sticky” feature to keep it pinned. 
                    While illustrating, there are many Edit functions I need to use repeatedly, but each time I must re-open the dropdown. 
                    Adding an option to keep it open fixes this. While tricky to learn (double the state models), icons will help memorability and this change will make workflows much more efficient. 
                    Note that this change is visible on initial state.
                    <br><br>
                    In my initial state re-design, I’m adding a pin icon on the dropdown button that can be optionally clicked (still trigging the button) which decides if we are going with the current state model or my revised state model as seen in the next annotated design.    
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img style="margin-top: 3px;" src="${img_state_revised_1}" alt="flow chart describing the redesigned state model of mouse user in photoshop dropdown, initial state">
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    The “sticky” state will add a close option to the menu which will now be the way to close it, rather than clicking an item or clicking out of it (removed in the state model). 
                    To help with memorability, the pin button will be stateful where outside of it it is “unpinned” and inside it will be “pinned”. 
                    This way, if at a point in a user’s workflow they require repeated usage of Edit menu functions, users can save the mouse travel time to re-open it. 
                    <br><br>
                    Especially when drawing with a stylus, the time to move and click on non-drawing functionality is burdensome and becomes noticeable. 
                    In fact, specialized shortcut input hardware, like the CSP Tabmate, are used by many professional comic artists to this end. 
                    This is why I believe this redesign will help increase efficiency with core users.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img style="margin-top: 3px;" src="${img_state_revised_2}" alt="flow chart describing the redesigned state model of mouse user in photoshop dropdown, active state">
            </div>
        </div>
        </section>
        
        <section id="section 3, redesign"
            role="region"
            aria-labelledby="section-3-h1">
        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-3-h1" tabIndex="0" class="big-header">3: REDESIGN</h1>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    My component introduces an additional state model to dropdown menus which can be confusing to learn. 
                    I aim to make this state change clear with the pin indicator and the “sticky” functionality is common to other applications so there will be some bridging of knowledge. 
                    I also think intuition will help since the *only* difference is the red pin and with a pointer cursor the user should figure out to click and discover its functionality. 
                    The symbol as a signifier is memorable since there is a visual change here–it’s not something that has to fully remembered like right clicking on something.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_redesign_1}" alt="three edit buttons (that trigger dropdown) with pin icon inside them indicating different states">
                <div class="caption-text-block">
                    The initial state with my revised component has an extra pin button on the side that can be hovered over. 
                    When clicking open this Edit dropdown, if the button is clicked NOT on the pin it functions as normal. 
                    If it is clicked with the pin it enters sticky mode.
                </div>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block">
                    As I explained in the annotations on my revised state models, the key effect of my revisions is to increase efficiency of using dropdown menu functions in Photoshop. 
                    Users often wish to repeat certain actions but must open the drop-down every time which can be cumbersome for certain workflows, e.g. resizing 50 panels in a webcomics script or applying a script to 20 different assets since it disappears every time. 
                    Now that it doesn’t disappear this problem is solved and can increase efficiency in such a context (at the expense of increased complexity). 
                    <br><br>
                    Addressing accessibility, opening the sticky dropdown requires the focus order to include the pin as a focusable and clickable element&mdash;this works with proper tabIndexes and ARIA tags. 
                    To close it is more challenging but I’m thinking a keyboard shortcut (notified upon opening) or including the pin inside the dropdown’s web area can fix this. 
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <img src="${img_redesign_2}" alt="two dropdown menus one with sticky mode on and other with sticky mode off">
                <div class="caption-text-block">
                    When in the sticky dropdown state, normal item clicks and clicking outside of the menu will no longer close the menu. 
                    Instead, the user must click on the pin icon in the dropdown button to begin with. 
                    To help communicate this, we use a pointer cursor on pin cover to indicate it contains button-like functionality (toggle) and is something to click on.
                </div>
            </div>
        </div>
        </section>

        <section id="section 4, reflection"
            role="region"
            aria-labelledby="section-4-h1">
        <div class="grid-row">
            <div class="expand-full-width">
                <h1 id="section-4-h1" tabIndex="0" class="big-header">4: REFLECTION</h1>
            </div>
        </div>
        <div class="grid-row margin-top-1rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block has-dropcap">
                    1 None of the surveyed components did great on accessibility since the typical tabbing and screen reader navigation failed to work in all scenarios.
                    Here I realized that accessible design is only one half of the problem&mdash;the other half is the implementation.
                    In my redesign which introduces a new state model for efficiency, I needed to be cognizant of these dual requirements. 
                    Using cues that depend not on context but responsive visual changes, my goal was to make my extended functionality self-discoverable and still fit into the order hierarchy that tabbing and screen readers expect.
                    While design doesn't address engineering, in implemention I will ensure that tabIndexes and ARIA tags are <i>used correctly</i> to ensure <b>equal functionality between mouse, keyboard, and screen reader users</b>.
                </div>
            </div>
            <div class="column-B">
                <div tabIndex="0" class="text-block has-dropcap">
                    2 The mismatch I addressed arises from the discrepancy between the majority of Photoshop users who use the Edit functions one-off and 
                    Photoshop users who need to apply the Edit functions repeatedly in certain creative workflows, particularly those in production of series or sequential work.
                    While this is largely a problem of human factors engineering, I believe <b>sticky menus contribute to accessibility by reducing mouse travel which supports different motor abilities and endurances.</b>
                    <br><br>
                    The assumption that the Edit functions are one and done (since the menu closes automatically) does not align for these users. 
                    As discussed in <span style="font-family: Wulkan Display Bold; line-height: 1;">2: STATE MODELS</span>, the current functionality creates a burden of repeated action. 
                    Furthermore, this is of interest to artists that draw for several hours each day (e.g. webcomic artists) who minimize time spent on non-drawing actions that generate strain on the hands, wrists, and arms.
                    Carpal tunnel injuries and the like are not uncommon in the industry. I hope sticky menus can help alleviate this problem and better preserve the "creative flow" of the digital drawing process.
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        <div class="grid-row margin-top-2rem">
            <div class="column-A">
                <div tabIndex="0" class="text-block has-dropcap">
                    3 Looking back how Photoshop's dropdown menus impact users with impairments,
                    using the system UI for the majority of dropdowns was the best choice out of all surveyed components 
                    because the system screen reader is directly integrated with the system UI.
                    I was (more or less) able to navigate Photoshop's system UI dropdowns while Google Docs and Discord had severe issues. 
                    This informs the engineering of our designs&mdash;<b>implementing designs through a system UI improves the robustness of screen readers.</b>
                    Nevertheless, opening the dropdown in Photoshop was inaccessible to keyboard users in that you had to use a mouse click.
                </div>
                <div class="vertical-line"></div>
            </div>
            <div class="column-B">
                <div tabIndex="0" class="text-block has-dropcap">
                    4 Between mouse, keyboard, mobile, and screen reader users, the status quo proritizes mouse users in the process of creating components.
                    This relegates keyboard and mobile users to a second-class experience because the designs are often <i>then</i> adapted towards them, rather than being designed for them from the start.
                    This problem is only worse for screen reader users who are often left out of the design process entirely, until the end when attempts to add screen reader metadata are made.
                    The solution to this problem is to design for all users from the start and, per Kat Holmes' Inclusive Design, 
                    these solutions do not need to be integrated in the sense that we target the "average" user. 
                    It is possible to support all users through different streams of interaction so equal experiences are acheived in the end.
                </div>
                <div class="vertical-line"></div>
            </div>
        </div>
        </section>

        <footer class="grid-row margin-top-4rem margin-bottom-4rem">
            <div class="text-block">
                February 2025
            </div>
        </footer>
        `;
    }
}