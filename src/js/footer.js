console.log('This is footer.js');
// common-infolinks-for-customers
const footerInfolinks = {
    "listInfolinksBlock": [
        {
            headerTitle: "Quick Links",
            listitems: [{
                linkTag: "a",
                firstLink: "Home",
                secondLink: "New Products",
                thirdLink: "Specials",
                fourthLink: "All products",
                fivethLink: "Reviews",
                sixthLink: "Contacts",
                seventhLink: "FAQs"}]
        },
        {
            headerTitle: "customers",
            listitems: [{
                linkTag: "a",
                firstLink: "Log In",
                secondLink: "Create Account",
                thirdLink: "Shipping & Returns",
                fourthLink: "Privacy Nitice",
                fivethLink: "Conditions of Use"}]
        },
        {
            headerTitle: "Follow us",
            listitems: [{
                linkTag: "a",
                firstLink: "Facebook",
                secondLink: "Twitter",
                thirdLink: "RSS"}]
        },
        {
            headerTitle: "contact us",
            listitems: [{
                paragrafTag: "p",
                paragrafContent: "Company Inc., 8901 Marmora Road, Glasgow, D04 89GR",
                phoneTag: "span",
                phoneNumber: "1 (800) 234-5677",}]
        }

    ]
};

const templateFooterInfolinks = '{{#listInfolinksBlock}}'
    +'<div class="info-links-block">'
    +'<h4 class="info-header">{{headerTitle}}</h4>'
    +'{{#listitems}}{{>items}}{{/listitems}}'
    +'</div>'
    +'{{/listInfolinksBlock}}';
const partialsFooterInfolinks = {
    items: '{{#firstLink}}<{{linkTag}} class="link" href="#">{{firstLink}}</{{linkTag}}>{{/firstLink}}'
    +'{{#secondLink}}<{{linkTag}} class="link" href="#">{{secondLink}}</{{linkTag}}>{{/secondLink}}'
    +'{{#thirdLink}}<{{linkTag}} class="link" href="#">{{thirdLink}}</{{linkTag}}>{{/thirdLink}}'
    +'{{#fourthLink}}<{{linkTag}} class="link" href="#">{{fourthLink}}</{{linkTag}}>{{/fourthLink}}'
    +'{{#fivethLink}}<{{linkTag}} class="link" href="#">{{fivethLink}}</{{linkTag}}>{{/fivethLink}}'
    +'{{#sixthLink}}<{{linkTag}} class="link" href="#">{{sixthLink}}</{{linkTag}}>{{/sixthLink}}'
    +'{{#seventhLink}}<{{linkTag}} class="link" href="#">{{seventhLink}}</{{linkTag}}>{{/seventhLink}}'
    +'{{#paragrafContent}}<{{paragrafTag}} class="copyright-text">{{paragrafContent}}</{{paragrafTag}}>{{/paragrafContent}}'
    +'{{#phoneNumber}}<{{phoneTag}} class="phone">{{phoneNumber}}</{{phoneTag}}>{{/phoneNumber}}'
};

const htmlFooterInfolinks = Mustache.to_html(templateFooterInfolinks, footerInfolinks, partialsFooterInfolinks);
const footerInfolinksBox  = document.getElementsByClassName('common-infolinks-for-customers')[0];
footerInfolinksBox.innerHTML = htmlFooterInfolinks;


// footer-menu
const footerMenuItems = {
    "list": [
        { listitem: "Copyright © 2015 Flower Shop. Powered by Zen Cart"},
        { listitem: "Privacy Notice"},
        { listitem: "Template settings"},
    ]
};
const templateFooterMenu = '<ul class="list">{{#list}}<li class="list-item">{{>items}}</li>{{/list}}</ul>';
const partialsFooterMenu = {
    items: '<li class="list-item"><a class="link">{{listitem}}</a></li>'
    };

const htmlFooterMenu = Mustache.to_html(templateFooterMenu, footerMenuItems, partialsFooterMenu);
const footerMenu  = document.getElementsByClassName('footer-menu')[0];
footerMenu.innerHTML = htmlFooterMenu;