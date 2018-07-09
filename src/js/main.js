console.log('This is main.js');
// news-line
const sectionItems = {
    "listItems":[
        { pointer: "1"},
        { pointer: "2"},
        { pointer: "3"}
    ]
};
const templateNewsSection = '<section class="items">{{#listItems}}<div class="item">{{>items}}</div>{{/listItems}}</section>';
const partialsNewsItem = {
    items: '<figure class="news-picture">'
    +'<img class="news-img" src="images/{{pointer}}.png" alt="flowers" />'
    +'<p class="actions-banner">'
    +'<span>love & romance</span>'
    +'<br />'
    +'<span>new arrivals</span>'
    +'</p>'
    +'<a href="#" class="link shop-now">Shop now!</a>'
    +'</figure>'};

const htmlMainSection = Mustache.to_html(templateNewsSection, sectionItems, partialsNewsItem);
const mainSection  = document.getElementsByClassName('news-line')[0];
mainSection.innerHTML = htmlMainSection;

// main-content-sidebar
const sidebarItems = {
    "sidebarItems":[
        {   pointer: "1",
            description: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod",
            price: "$23.96 ",
            oldprice: "$28.96"},
        {   pointer: "2",
            description: "Dorem of letters, as opposed to using 'Content here, content here hbchebg",
            price: "$24.96 ",
            oldprice: "$29.96"},
        {   pointer: "3",
            description: "All bthe Lorem Ipsum generators on the Internet tend to repeat predefined",
            price: "$25.96 ",
            oldprice: "$30.96"}
    ]
};
const templateMainSidebar = '<aside class="new-products">'
    +'<h3 class="content-header">New products</h3>'
    +'{{#sidebarItems}}<div class="item">{{>items}}</div>{{/sidebarItems}}'
    +'</aside>';
const partialsSidebarItem = {items: '<div class="new-item">'
    +'<figure class="new-product-picture">'
    +'<img class="new-product-img" src="images/sidebar{{pointer}}.png" alt="flowers" />'
    +'</figure>'
    +'<div class="new-description">'
    +'<h3>Excepteur sint </h3><h3>occaecat cupidatat</h3>'
    +'<p class="paragraf">{{description}}</p>'
    +'<p class="paragraf current-price">'
    +'<span>{{price}}</span><span class="old-price">{{oldprice}}</span>'
    +'</p>'
    +'</div>'
    +'</div>'};

const htmlMainSidebar = Mustache.to_html(templateMainSidebar, sidebarItems, partialsSidebarItem);
const mainSidebar  = document.getElementsByClassName('main-content-sidebar')[0];
mainSidebar.innerHTML = htmlMainSidebar;

// content-items
const contentItems = {
    "contentItems":[
        {   pointer: "1",
            title: "Excepteur sint occaecat cupidatat non proident",
            description: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.",
            currentprice: "",
            newprice: "$23.96",
            oldprice: "$28.96",
            salevalue: "-30%"
        },
        {   pointer: "2",
            title: "Excepteur sint occaecat cupidatat non proident",
            description: "Dorem of letters, as opposed to using 'Content here, content here hbchebg",
            currentprice: "$24.96 ",
            newprice: "",
            oldprice: "",
            salevalue: ""
        },
        {   pointer: "3",
            title: "Excepteur sint occaecat cupidatat non proident",
            description: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.",
            currentprice: "",
            newprice: "$23.96 ",
            oldprice: "$30.96 ",
            salevalue: "-30%"
        },
        {   pointer: "4",
            title: "Excepteur sint occaecat cupidatat non proident",
            description: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod",
            currentprice: "",
            newprice: "$23.96 ",
            oldprice: "$28.96 ",
            salevalue: "-30%"
        },
        {   pointer: "5",
            title: "Excepteur sint occaecat cupidatat non proident",
            description: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.",
            currentprice: "",
            newprice: "$23.96 ",
            oldprice: "$29.96 ",
            salevalue: "-30%"
        },
        {   pointer: "6",
            title: "Excepteur sint occaecat cupidatat non proident",
            description: "All bthe Lorem Ipsum generators on the Internet tend to repeat predefined",
            currentprice: "$25.96 ",
            newprice: "",
            oldprice: "",
            salevalue: ""
        }
    ]
};
const templateMainContent = '<section class="content-items">'
    +'{{#contentItems}}<div class="item">{{>items}}</div>{{/contentItems}}'
    +'</section>';
const partialsContentItem = {items: '<div class="content-item"><div class="inner-item-wrapper">'
    +'<figure class="content-picture"><span class="sale-value">{{salevalue}}</span>'
    +'<img class="content-img" src="images/content{{pointer}}.png" alt="flowers" />'
    +'<figcaption class="content-product-title">{{title}}</figcaption>'
    +'<p class="content-description">'
    +'<span class="main-description">{{description}}</span>'
    +'<p class="current-price">'
    +'<span>{{currentprice}}</span>'
    +'<span class="new-price">{{newprice}}</span>'
    +'<span class="old-price">{{oldprice}}</span>'
    +'</p>'
    +'</p>'
    +'</figure>'
    +'<button class="btn content-btn add-btn ">Add to cart</button>'
    +'<button class="btn content-btn details-btn">Details</button></div></div>'};

const htmlMainContent = Mustache.to_html(templateMainContent, contentItems, partialsContentItem);
const mainContent  = document.getElementsByClassName('content-items')[0];
mainContent.innerHTML = htmlMainContent;

// custom-line
const customBlockItems = {
    "customBlockItems":[
        {   titleofMainHeader: "Custom Block ",
            customHeaderTag: "h3",
            pointer: "1",
            paragrafTag: "p",
            firstParagrafText: "1Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            secondParagrafText: "2Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        },
         {
             pointer: "2",
             titleofMainHeaderSecondBlock: "Custom Block ",
             customHeaderTagSecondBlock: "h3",
             customPictureTag: "figure",
             descriptionTag: "div",
             paragrafTag: "p",
             descriptionText: "Lorem descriptionText conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
         },
        {   titleofMainHeader: "Custom Block ",
            customHeaderTag: "h3",
            pointer: "3",
            paragrafTag: "p",
            firstParagrafHeaderTitle: "firstParagrafHeaderTitle amet conse ctetur",
            firstParagrafText: "firstParagrafText sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
            paragrafHeaderTag: "h5",
            secondParagrafHeaderTitle: "secondParagrafHeaderTitle et conse ctetur",
            secondParagrafText: "secondParagrafText sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        },
    ]
};

const templatecustomBlock = '<section class="items">{{#customBlockItems}}<div class="item">{{>items}}</div>{{/customBlockItems}}</section>';
const partialscustomBlock = {
    items: '{{#customHeaderTag}}<{{customHeaderTag}} class="custom-header">{{titleofMainHeader}}{{pointer}}</{{customHeaderTag}}>{{/customHeaderTag}}'
    +'{{#customPictureTag}}<{{customPictureTag}} class="custom-picture">'
    +'<img src="images/content-banner{{pointer}}.png" alt="custom product" />'
    +'</{{customPictureTag}}>{{/customPictureTag}}'
    +'{{#descriptionTag}}<{{descriptionTag}} class="custom-description">'
    +'{{#customHeaderTagSecondBlock}}<{{customHeaderTagSecondBlock}} class="custom-header">{{titleofMainHeaderSecondBlock}}{{pointer}}</{{customHeaderTagSecondBlock}}>{{/customHeaderTagSecondBlock}}'
    +'{{#paragrafTag}}<{{paragrafTag}} class="custom-text">'
    +'{{descriptionText}}'
    +'</{{paragrafTag}}>{{/paragrafTag}}'
    +'</{{descriptionTag}}>{{/descriptionTag}}'
    +'{{#paragrafHeaderTag}}<{{paragrafHeaderTag}} class="block-header">{{firstParagrafHeaderTitle}}</{{paragrafHeaderTag}}>{{/paragrafHeaderTag}}'
    +'{{#paragrafTag}}<{{paragrafTag}} class="custom-text">'
    +'{{firstParagrafText}}</{{paragrafTag}}>{{/paragrafTag}}'
    +'{{#paragrafHeaderTag}}<{{paragrafHeaderTag}} class="block-header">{{secondParagrafHeaderTitle}}</{{paragrafHeaderTag}}>{{/paragrafHeaderTag}}'
    +'{{#paragrafTag}}<{{paragrafTag}} class="custom-text">'
    +'{{secondParagrafText}}</{{paragrafTag}}>{{/paragrafTag}}'
};
const htmlcustomBlock = Mustache.to_html(templatecustomBlock, customBlockItems, partialscustomBlock);
const customBlock  = document.getElementsByClassName('custom-line')[0];
customBlock.innerHTML = htmlcustomBlock;






