console.log('This is header.js');
// top-panel_menu
const topPanelMenuItems = {
    "list-items": [
        {item: "usd", class: "link currency", iClass: "icon icon-caret-down1" },
        {item: "login", class: "link"},
        {item: " my account", class: "link"}
    ]
};
const templatetopPanelMenu = '{{#list-items}}<li class="list-item">{{>items}}</li>{{/list-items}}';
const partialsLi = {
    items: '<a class="{{class}}">{{item}}{{#iClass}}'
    +'<i class="{{iClass}}"></i>{{/iClass}}'
    +'</a>'};
const htmlTopPanelMenu = Mustache.to_html(templatetopPanelMenu, topPanelMenuItems, partialsLi);
const topPanelMenu = document.getElementsByClassName('top-panel_menu')[0];
topPanelMenu.innerHTML = htmlTopPanelMenu;

// main-menu
const mainMenuItems = {
    "list": [
        { listitem: "Categories",  new: "new!"},
        { listitem: "Specials",  new: "new!"},
        { listitem: "quick links" },
        { listitem: "Manufacturers"},
        { listitem: "INFO", class: "link"},
        { listitem: "Shipping & RETURNS"},
    ]
};
const templateMainMenu = '<ul class="list">'
    +'{{#list}}<li class="list-item">{{>items}}</li>{{/list}}</ul>';
const partialsMenu = {
    items: '<a class="link">{{listitem}}</a>'
    +'{{#new}}<span class="actions-label">{{new}}</span>{{/new}}'};

const htmlMainMenu = Mustache.to_html(templateMainMenu, mainMenuItems, partialsMenu);
const mainMenu  = document.getElementsByClassName('main-menu')[0];
mainMenu.innerHTML = htmlMainMenu;