import "babel-polyfill";

import { topPanelMenuItems } from "./js/header";
import { mainMenuItems } from "./js/header";
import { newsLinesectionItems } from "./js/main";
import { sidebarItems } from "./js/main";
import { contentItems } from "./js/main";
import { customBlockItems } from "./js/main";
import { footerInfolinks } from "./js/footer";
import { footerMenuItems } from "./js/footer";

// top-panel_menu
const templateTopPanelMenu = require('./mustache-html/header/header-top-panel-menu.html');
const htmlTopPanelMenu = templateTopPanelMenu(topPanelMenuItems);
const topPanelMenu = document.getElementsByClassName('top-panel_menu')[0];
topPanelMenu.innerHTML = htmlTopPanelMenu;

// header main-menu
const templateMainMenu = require('./mustache-html/header/header-main-menu.html');
const htmlMainMenu = templateMainMenu(mainMenuItems);
const mainMenu  = document.getElementsByClassName('main-menu')[0];
mainMenu.innerHTML = htmlMainMenu;

// news-line
const templateHtmlMainSection = require('./mustache-html/main/main-news-line.html');
const htmlMainSection = templateHtmlMainSection(newsLinesectionItems);
const mainSection  = document.getElementsByClassName('news-line')[0];
mainSection.innerHTML = htmlMainSection;

// main-content-sidebar
const templateHtmlMainSidebar = require('./mustache-html/main/main-content-sidebar.html');
const htmlMainSidebar = templateHtmlMainSidebar(sidebarItems);
const mainSidebar  = document.getElementsByClassName('main-content-sidebar')[0];
mainSidebar.innerHTML = htmlMainSidebar;

// content-items
const templatehtmlMainContent = require('./mustache-html/main/main-content-items.html');
const htmlMainContent = templatehtmlMainContent(contentItems);
const mainContent  = document.getElementsByClassName('content-items')[0];
mainContent.innerHTML = htmlMainContent;

// custom-line
const templatecustomBlock = require('./mustache-html/main/main-custom-line.html');
const htmlcustomBlock = templatecustomBlock(customBlockItems);
const customBlock  = document.getElementsByClassName('custom-line')[0];
customBlock.innerHTML = htmlcustomBlock;


// common-infolinks-for-customers
const templateFooterInfolinks = require('./mustache-html/footer/footer-infolinks-for-customers.html');
const htmlFooterInfolinks = templateFooterInfolinks(footerInfolinks);
const footerInfolinksBox  = document.getElementsByClassName('common-infolinks-for-customers')[0];
footerInfolinksBox.innerHTML = htmlFooterInfolinks;


// footer-menu
const templateFooterMenu = require('./mustache-html/footer/footer-menu.html');
const htmlFooterMenu = templateFooterMenu(footerMenuItems);
const footerMenu  = document.getElementsByClassName('footer-menu')[0];
footerMenu.innerHTML = htmlFooterMenu;

import './scss/styles.scss'
console.log('=> 🔥  Webpack app');