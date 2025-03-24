import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import logo_full from 'url:./assets/daniel_smith_logo_full.jpg';
import logo_mobile from 'url:./assets/daniel_smith_logo_mobile.jpg';

import icon_facebook from 'url:./assets/facebook_icon.jpg';
import icon_instagram from 'url:./assets/instagram_icon.jpg';
import icon_pinterest from 'url:./assets/pinterest_icon.jpg';
import icon_youtube from 'url:./assets/youtube_icon.jpg';
import icon_hamburger from 'url:./assets/hamburger_icon.jpg';

import icon_white_facebook from 'url:./assets/facebook_icon_white.png';
import icon_white_instagram from 'url:./assets/instagram_icon_white.png';
import icon_white_pinterest from 'url:./assets/pinterest_icon_white.png';
import icon_white_youtube from 'url:./assets/youtube_icon_white.png';

import hero_image from 'url:./assets/hero-image.png';
import hero_image_short from 'url:./assets/hero-image-short.png';
import desktop_banner_bg from 'url:./assets/desktop_banner_bg.jpg';

import blog_image_1 from 'url:./assets/blog_img_1.jpg';
import blog_image_2 from 'url:./assets/blog_img_2.jpg';
import blog_image_3 from 'url:./assets/blog_img_3.jpg';

import splash_1 from 'url:./assets/splash_1.png';
import splash_2 from 'url:./assets/splash_2.png';
import splash_3 from 'url:./assets/splash_3.png';
import splash_4 from 'url:./assets/splash_4.png';
import splash_5 from 'url:./assets/splash_5.png';
import splash_6 from 'url:./assets/splash_6.png';

import pig_bg_1 from 'url:./assets/pig1.jpeg';
import pig_bg_2 from 'url:./assets/pig2.jpeg';
import pig_bg_3 from 'url:./assets/pig3.jpeg';
import pig_bg_4 from 'url:./assets/pig4.jpeg';
import pig_bg_5 from 'url:./assets/pig5.jpeg';
import pig_bg_6 from 'url:./assets/pig6.jpeg';

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

const header_css = css`
    /**************/
    /* HEADER CSS */
    /**************/

    .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        padding-top: 0.5rem;
        background-color: white;
    }

    @media (max-width: 768px) {
        .header_lang { flex: 0.5; }
    }
    @media (min-width: 768px) {
        .header_lang { flex: 1; }
        .header { margin-top: 1rem; }
    }

    .header_lang {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .header_lang select {
        font-size: 1.5rem;
    }

    .header_logo {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        .header_logo_img {
            display: none;
        }

        .header_logo_img_mobile {
            display: block;
            width: 20rem;
        }
    }
    @media (min-width: 768px) {
        .header_logo_img {
            display: block;
            width: 20rem;
        }

        .header_logo_img_mobile {
            display: none;
        }
    }

    .header_socials {
        flex: 1;            
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background-color: white;
    }

    .header_socials_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        max-width: 20rem;
        width: 80%;
    }

    .header_socials img {
        width: 2rem;
    }

    .header_hamburger {
        flex: 0.5;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .header_hamburger_img {
        width: 2.5rem;
        cursor: pointer;
    }

    .header_nav_bar {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;
    }
    @media (min-width: 768px) {
        .header_nav_bar {
            padding-left: 4rem !important;
            padding-right: 4rem !important;
            margin-bottom: 1rem;
        }
    }
    .header_nav_bar_item {
        font-weight: bold;
        font-size: 16pt;
        cursor: pointer;
    }
    .header_nav_bar_item a {
        color: inherit;
        text-decoration: none;
    }

    .mobile_top_hr {
        margin-top: 0.5rem;
        width: 100%;
        height: 0.5rem;
        background-color: #003B65;
    }
`;

const banner_css = css`
    /**************/
    /* BANNER CSS */
    /**************/

   .mobile_banner {
        width: 100%;
        display: grid;
        place-items: center;
    }

    .mobile_banner_text {
        position: relative;
        font-size: 2rem;
        text-align: center;
        white-space: nowrap;
        color: white;
        font-weight: bold;
        width: 100%;
        height: 8rem;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 1rem 0;
        z-index: 1;
        grid-area: 1 / 1 / 2 / 2;
    }

    .mobile_hero_image {
        position: relative; /* Needed for z-index stacking */
        width: 100%;
        z-index: 0;
        grid-area: 1 / 1 / 2 / 2;
    }

    .desktop_banner {
        width: 100%;
        position: relative;
        height: fit-content;
        margin-top: 1rem;

        background-size: auto 100%;
        background-repeat: repeat-x;
        background-position: top center; 
    }

    .desktop_banner_text {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 3rem 0;
        width: 100%;
    }
`;

const section_1_css = css`
    /*******************/
    /* SECTION 1 - CSS */
    /*******************/

    .mobile_section_1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .desktop_section_1 {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .text_paragraph_mobile {
        padding: 2rem;
    }

    .text_paragraph_desktop {
        padding: 4rem;
    }

    .section-1-btn-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 0 2rem 2rem 2rem;
    }

    .shop-all-colors-btn {
        display: block;
        background-color: #003B65;
        color: white;
        white-space: nowrap;
        text-decoration: none;
        text-align: center;
        font-size: 1.25rem;

        padding: 1rem 2rem;
        cursor: pointer;
        width: calc(50% - 0.5rem);
        min-width: 12rem;
        z-index: 10;
    }
    
    .find-a-retailer-btn {
        display: block;
        border: 2px solid #003B65;
        color: #003B65;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;
        font-size: 1.25rem;

        padding: 1rem 2rem;
        cursor: pointer;
        width: calc(50% - 0.5rem);
        min-width: 12rem;
        z-index: 10;
    }
    @media (max-width: 768px) {
        .shop-all-colors-btn {
            padding: 1rem 0rem !important;
            min-width: 8rem;
            overflow-x: hidden;
        }
        .find-a-retailer-btn {
            padding: 1rem 0rem !important;
            min-width: 8rem;
            overflow-x: hidden;
        }
    }

    .section_1_left {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section_1_right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .desktop_hero_image {
        padding: 4rem 4rem 0 0;
    }
`;

const blog_and_nav_section_css = css`
    /****************************/
    /* BLOG AND NAV SECTION CSS */
    /****************************/
    .nav_section {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        .blog_and_nav_section {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .blog_section {
            padding: 2rem;
        }
    }
    @media (min-width: 768px) {
        .blog_and_nav_section {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
        }

        .nav_section {
            width: 50%;
            margin: 4rem 0 0 4rem;
        }

        .blog_section {
            width: 50%;
            margin: 4rem 4rem 0 0;
        }
    }

    .blog_section {
        background-color: #003B65;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    .blog_title {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .blog_post {
        width: calc(100% - 4rem);
        max-width: 30rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        cursor: pointer;
        overflow: hidden;
        background-size: cover;
    }

    .blog_post_title {
        font-size: 1.5rem;
        text-align: center;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
    }

    .blog_post_title a {
        color: white;
        text-decoration: underline;
        white-space: nowrap;
    }

    .nav_section_title {
        margin-top: 2rem;
        margin-bottom: 2rem;
        padding-right: 2rem;
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
    }

    .nav_section_grid {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        margin-right: 2rem;
    }
    @media (max-width: 768px) {
        .nav_section_grid {
            margin-left: 2rem;
        }
        .nav_section_title {
            padding-right: 0rem;
        }
    }

    .splash_nav {
        width: 100%;
        display: grid;
        place-items: center;
        cursor: pointer;
    }

    .splash_nav_text {
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 1rem;
        width: 9rem;
        text-align: center;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.7);
        z-index: 1;
        grid-area: 1 / 1 / 2 / 2;

        color: #003B65;
        border: 2px solid #003B65;
        white-space: nowrap;
    }

    .splash_nav_img {
        width: 100%;
        z-index: 0;
        grid-area: 1 / 1 / 2 / 2;
    }

    .nav_column_text {
        display: block !important;
        margin-top: 1rem;
        margin-right: 4rem;
    }

    .about_us_line {
        width: 0px; 
        height: 100%; 
        border-left: 1px solid #888; 
        flex-grow: 1;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        padding-right: 4rem;
    }
`;

const watercolor_section_css = css`
    /******************/
    /* WATERCOLOR CSS */
    /******************/

    .pigment-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pigment-section-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .pigment-section-grid {
        width: calc(100% - 4rem);
        min-width: 24rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }

    .pigment-card {
        width: 10rem;
        height: 10rem;
        margin: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        background-size: 110%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .pigment-text {
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        width: 100%;
        font-size: 1.25rem;
        color: white;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .view-all-pigments-btn {
        border: 2px solid #003B65;
        color: #003B65;
        padding: 1rem 2rem;
        cursor: pointer;
        width: calc(50% - 0.5rem);
        min-width: 12rem;
        z-index: 10;
        margin-top: 1rem;
    }

    a .view-all-pigments-btn {
        color: inherit;
        text-decoration: none !important;
        white-space: nowrap;
        font-size: 1.25rem;
        text-align: center;
        width: 100%;
        display: block;
    }
`;

const footer_css = css`
    /******************/
    /* FOOTER CSS     */
    /******************/

    .prefooter {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
    }

    .subscribe_text {
        padding: 0 2rem 0 2rem;
    }
    .subscribe_btn {
        padding: 1rem 1rem;
        background-color: #003B65;
        color: white;
        text-decoration: none;
        margin-right: 2rem;
        font-size: 1.25rem;
        height: fit-content;
    }
    @media (max-width: 768px) {
        .subscribe_text {
            padding-left: 2rem !important;
        }
        .subscribe_btn {
            margin-right: 2rem !important;
        }
    }

    .prefooter_logo {
        max-width: 20rem;
        width: 30%;
        margin-left: 3rem;
        margin-right: 2rem;
    }

    .prefooter_subscribe {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #EEEEEE;
        width: 60%;
        max-width: 32rem;
        padding: 2rem 0rem;
        margin-right: 4rem;
    }
        
    .footer {
        width: 100%;
        height: 10rem;
        margin-top: 4rem;
        background-color: #003B65;
        display: flex;
        justify-content: center;
    }
    .footer-inner {
        width: 100%;
    }
    @media (max-width: 768px) {
        .footer {
            align-items: flex-start;
        }
        .footer-inner {
            flex-direction: column;
        }
    }
    @media (min-width: 768px) {
        .footer {
            align-items: center;
        }
        .footer-inner {
            flex-direction: row;
            align-items: center;
        }
    }

    .footer_socials_container {
        display: flex;
        flex-direction: row;
        width: calc(100% - 4rem);
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    @media (max-width: 768px) {
        .footer_socials_container {
            justify-content: space-around;
            width: calc(100% - 4rem);
        }
    }
    @media (min-width: 768px) {
        .footer_socials_container {
            justify-content: space-between;
            width: 20rem;
            margin-left: 4rem;
        }
    }

    .footer_text {
        color: white;
        text-align: center;
        font-size: 1rem;
        white-space: nowrap;
    }
    @media (min-width: 768px) {
        .footer_text {
            margin-left: auto;
            margin-right: 4rem;
        }
    }

    .footer_icon {
        width: 2rem;
        height: 2rem;
    }
`;

@customElement('responsive-redesign')
export class HelloWorld extends LitElement {
    static styles = [
        css_resets, 
        css`:host {
            width: 100%;
            background-color: white;

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        p {
            hyphens: auto;
            text-align: justify;
        }

        /**************/
        /* MISC CSS */
        /**************/
        
        .full_width_hr {
            margin-top: 1rem;
            // width: 88%;
            width: calc(100% - 4rem);
        }

        @media (min-width: 1400px) {
            .max-container {
                width: 100%;
                max-width: 1400px;
            }
        }

        @media (max-width: 768px) {
            .desktop_only { display: none !important; }
            .mobile_only { display: flex !important; }
            .desktop_only_grid { display: none !important; }
            .mobile_only_grid { display: grid !important; }
        }
        @media (min-width: 768px) {
            .desktop_only { display: flex !important; }
            .mobile_only { display: none !important; }
            .desktop_only_grid { display: grid !important; }
            .mobile_only_grid { display: none !important; }
        }`,

        header_css,
        banner_css,
        section_1_css,
        blog_and_nav_section_css,
        watercolor_section_css,
        footer_css
    ];

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        return html`
        <div class="header max-container">
            <div class="header_lang">
                <select name="cars" id="cars">
                    <option value="en">🇺🇸</option>
                    <option value="zn">🇨🇳</option>
                    <option value="nl">🇳🇱</option>
                    <option value="fr">🇫🇷</option>
                    <option value="de">🇩🇪</option>
                    <option value="it">🇮🇹</option>
                    <option value="jp">🇯🇵</option>
                    <option value="es">🇪🇸</option>
                    <option value="uk">🇬🇧</option>
                </select>
            </div>  

            <div class="header_logo">
                <a href="./">
                    <img class="header_logo_img" src="${logo_full}" alt="Daniel Smith Logo" />
                    <img class="header_logo_img_mobile" src="${logo_mobile}" alt="Daniel Smith Logo" />
                </a>
            </div>

            <div class="header_hamburger mobile_only">
                <img class="header_hamburger_img" src="${icon_hamburger}"/>
            </div>

            <div class="header_socials desktop_only">
                <div class="header_socials_container">
                    <a href=""><img src="${icon_facebook}"/></a>
                    <a href=""><img src="${icon_youtube}"/></a>
                    <a href=""><img src="${icon_pinterest}"/></a>
                    <a href=""><img src="${icon_instagram}"/></a>
                </div>
            </div>
        </div>
        <hr class="full_width_hr desktop_only max-container"/>
        <div class="mobile_top_hr mobile_only"></div>
        <div class="header_nav_bar desktop_only max-container">
            <div class="header_nav_bar_item"><a href="./">Home</a></div>
            <div class="header_nav_bar_item"><a href="./">About Us</a></div>
            <div class="header_nav_bar_item"><a href="./">Community</a></div>
            <div class="header_nav_bar_item"><a href="./">Products</a></div>
            <div class="header_nav_bar_item"><a href="./">Blog</a></div>
            <div class="header_nav_bar_item"><a href="./">Find a Retailer</a></div>
            <div class="header_nav_bar_item"><a href="./">Contact Us</a></div>
        </div>

        <div class="mobile_banner mobile_only_grid">
            <div class="mobile_banner_text">DANIEL SMITH Extra <br> Fine Watercolors - 5ml</div>
            <img class="mobile_hero_image" src=${hero_image_short}>
        </div>
        <div class="desktop_banner desktop_only_grid" style="background-image: url(${desktop_banner_bg});">
            <div class="desktop_banner_text">DANIEL SMITH Extra Fine Watercolors - 5ml</div>
        </div>

        <div class="mobile_section_1 mobile_only">
            <p class="text_paragraph_mobile">
                Get ready to try something new with smaller 5ml tubes – 
                choose from a range of 117 colors selected from our three watercolor lines:
                <a href="./">Extra Fine</a>,
                <a href="./">PrimaTek</a>, and
                <a href="./">Luminescent</a>.
                <br><br>
                Paint everything you can imagine with vibrant and consistent colors 
                that can be easily mixed for even more variations.
            </p>
            <div class="section-1-btn-container">
                <a href="./" class="shop-all-colors-btn">Shop Colors</a>
                <a href="./" class="find-a-retailer-btn">Find Stores</a>
            </div>
        </div>
        <div class="desktop_section_1 desktop_only max-container">
            <div class="section_1_left">
                <p class="text_paragraph_desktop">
                    Get ready to try something new with smaller 5ml tubes – 
                    choose from a range of 117 colors selected from our three watercolor lines:
                    <a href="./">Extra Fine</a>,
                    <a href="./">PrimaTek</a>, and
                    <a href="./">Luminescent</a>.
                    <br><br>
                    Paint everything you can imagine with vibrant and consistent colors 
                    that can be easily mixed for even more variations. 
                    All colors are available in 15ml tubes. 
                    Many colors are also available in: 
                    5ml Tubes, Half Pans, Tube Sets, Half Pan Sets, Watercolor Sticks, Dot Cards.
                </p>
                <div class="section-1-btn-container" style="padding: 0 4rem 4rem 4rem !important; margin-top: -2rem;">
                    <a href="./" class="shop-all-colors-btn">Shop All Colors</a>
                    <a href="./" class="find-a-retailer-btn">Find a Retailer</a>
                </div>
            </div>
            <div class="section_1_right">
                <img class="desktop_hero_image" src=${hero_image_short}>
            </div>
        </div>

        <hr class="full_width_hr desktop_only max-container"/>

        <div class="blog_and_nav_section max-container">
            <div class="blog_section">
                <div class="blog_title">Recent Blog Posts</div>

                <div class="blog_post" style="background-image: url(${blog_image_1});">
                    <div class="blog_post_title">
                        <a href="./">Mixing Granulating<br>Greens</a>
                    </div>
                </div>

                <div class="blog_post" style="background-image: url(${blog_image_2});">
                    <div class="blog_post_title">
                        <a href="./">Atmospheric Landscapes<br>with Francesco Fontana</a>
                    </div>
                </div>

                <div class="blog_post" style="background-image: url(${blog_image_3});">
                    <div class="blog_post_title">
                        <a href="./">Choosing Colors for<br> Negative Painting</a>
                    </div>
                </div>
            </div>
            <div class="nav_section">
                <div class="nav_section_title">Find what you're looking for:</div>

                <div class="nav_section_grid">
                    <a href="./"><div class="splash_nav" style="grid-area: 1 / 1 / 2 / 2;">
                        <div class="splash_nav_text">VIDEOS</div>
                        <img class="splash_nav_img" src="${splash_1}">
                    </div></a>

                    <a href="./"><div class="splash_nav" style="grid-area: 1 / 2 / 2 / 3;">
                        <div class="splash_nav_text">TUTORIALS</div>
                        <img class="splash_nav_img" src="${splash_2}">
                    </div></a>

                    <a href="./"><div class="splash_nav" style="grid-area: 2 / 1 / 3 / 2;">
                        <div class="splash_nav_text">PIGMENTS</div>
                        <img class="splash_nav_img" src="${splash_3}">
                    </div></a>

                    <a href="./"><div class="splash_nav" style="grid-area: 2 / 2 / 3 / 3;">
                        <div class="splash_nav_text">EVENTS</div>
                        <img class="splash_nav_img" src="${splash_4}">
                    </div></a>

                    <a href="./"><div class="splash_nav" style="grid-area: 3 / 1 / 4 / 2;">
                        <div class="splash_nav_text">FAQ</div>
                        <img class="splash_nav_img" src="${splash_5}">
                    </div></a>

                    <a href="./"><div class="splash_nav" style="grid-area: 3 / 2 / 4 / 3;">
                        <div class="splash_nav_text">SDS</div>
                        <img class="splash_nav_img" src="${splash_6}">
                    </div></a>
                </div>

                <hr class="full_width_hr desktop_only" style="margin-top: 4rem;"/>
                
                <div class="desktop_only" style="display: flex; flex-direction: column;">
                    <div style="margin: 2rem 0 0 0; font-size: 1.5rem">About Us</div>
                    <p class="nav_column_text">
                        <a href="https://danielsmith.com/about/" target="_blank">Daniel Smith Inc.</a> manufactures professional artist quality watercolor paints, gouache paints and mediums. 
                        Owner John Cogley maintains an unwavering commitment to quality and innovation, so that artists worldwide 
                        can always rely on the stellar performance of DANIEL SMITH products, which are proudly made in the USA since 1976.
                    </p>
                </div>

                <div class="about_us_line"></div>
            </div>
        </div>

        <hr class="full_width_hr desktop_only max-container" style="margin-top: 4rem;"/>
        <hr class="full_width_hr mobile_only" style="margin-top: 2rem;"/>

        <div class='pigment-section max-container'>
            <div class="pigment-section-title desktop_only">All Watercolor Pigments</div>
            <div class="pigment-section-title mobile_only">Featured Pigments</div>
            <div class="pigment-section-grid">
                <div class="pigment-card" style="background-image: url(${pig_bg_1});"><a class="pigment-text" href="./">Rich Green<br>Gold</a></div>
                <div class="pigment-card" style="background-image: url(${pig_bg_2});"><a class="pigment-text" href="./">Monte Amiata<br>Sienna</a></div>
                <div class="pigment-card" style="background-image: url(${pig_bg_3});"><a class="pigment-text" href="./">Cobalt Blue<br>Violet</a></div>
                <div class="pigment-card" style="background-image: url(${pig_bg_4});"><a class="pigment-text" href="./">Moonglow<br>Burgundy</a></div>
                <div class="pigment-card" style="background-image: url(${pig_bg_5});"><a class="pigment-text" href="./">Phthalo<br>Turquoise</a></div>
                <div class="pigment-card" style="background-image: url(${pig_bg_6});"><a class="pigment-text" href="./">Cerulean<br>Blue</a></div>

                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_1});"><a class="pigment-text" href="./">Rich Green<br>Gold</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_2});"><a class="pigment-text" href="./">Monte Amiata<br>Sienna</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_3});"><a class="pigment-text" href="./">Cobalt Blue<br>Violet</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_4});"><a class="pigment-text" href="./">Moonglow<br>Burgundy</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_5});"><a class="pigment-text" href="./">Phthalo<br>Turquoise</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_6});"><a class="pigment-text" href="./">Cerulean<br>Blue</a></div>

                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_1});"><a class="pigment-text" href="./">Rich Green<br>Gold</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_2});"><a class="pigment-text" href="./">Monte Amiata<br>Sienna</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_3});"><a class="pigment-text" href="./">Cobalt Blue<br>Violet</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_4});"><a class="pigment-text" href="./">Moonglow<br>Burgundy</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_5});"><a class="pigment-text" href="./">Phthalo<br>Turquoise</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_6});"><a class="pigment-text" href="./">Cerulean<br>Blue</a></div>

                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_1});"><a class="pigment-text" href="./">Rich Green<br>Gold</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_2});"><a class="pigment-text" href="./">Monte Amiata<br>Sienna</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_3});"><a class="pigment-text" href="./">Cobalt Blue<br>Violet</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_4});"><a class="pigment-text" href="./">Moonglow<br>Burgundy</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_5});"><a class="pigment-text" href="./">Phthalo<br>Turquoise</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_6});"><a class="pigment-text" href="./">Cerulean<br>Blue</a></div>

                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_1});"><a class="pigment-text" href="./">Rich Green<br>Gold</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_2});"><a class="pigment-text" href="./">Monte Amiata<br>Sienna</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_3});"><a class="pigment-text" href="./">Cobalt Blue<br>Violet</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_4});"><a class="pigment-text" href="./">Moonglow<br>Burgundy</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_5});"><a class="pigment-text" href="./">Phthalo<br>Turquoise</a></div>
                <div class="pigment-card desktop_only" style="background-image: url(${pig_bg_6});"><a class="pigment-text" href="./">Cerulean<br>Blue</a></div>

            </div>
        </div>
        <a href="./" style="text-decoration: none; color: #003B65"><div class="view-all-pigments-btn mobile_only" style="text-decoration: none; color: #003B65">View All Pigments</div></a>
        <hr class="full_width_hr max-container" style="margin-top: 2rem;"/>

        <div class="prefooter mobile_only">
            <p class="subscribe_text">
                Subscribe to our email list for creative inspiration! We’ll only send you the good stuff, no spam.
            </p>
            <a class="subscribe_btn" href="./">Subscribe</a>
        </div>

        <div class="prefooter desktop_only max-container">
            <img class="prefooter_logo" src=${logo_full}>
            <div class="prefooter_subscribe">
                <p class="subscribe_text">
                    Subscribe to our email list for creative inspiration! We’ll only send you the good stuff, no spam.
                </p>
                <a class="subscribe_btn" href="./">Subscribe</a>
            </div>
        </div>

        <div class="footer">
            <div class="footer-inner max-container" style="display: flex;">
            <div class="footer_socials_container">
                    <a href="./"><img class="footer_icon" src="${icon_white_facebook}"/></a>
                    <a href="./"><img class="footer_icon" src="${icon_white_youtube}"/></a>
                    <a href="./"><img class="footer_icon" src="${icon_white_pinterest}"/></a>
                    <a href="./"><img class="footer_icon" src="${icon_white_instagram}"/></a>
                </div>
            <div class="footer_text">
                © Copyright 2012 - 2025 DANIEL SMITH
            </div>
            </div>
        </div>
        `;
    }
}