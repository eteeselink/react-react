/* global Reveal */

//require("normalize.css/normalize.css");
require("./global.styl");
require("./typography.styl");

// dummy require so that dev server reloads on index.html changes
require("raw!../index.html");

var CrowdOMeter = require("./view/CrowdOMeter");
var crowdOMeter = React.renderComponent(<CrowdOMeter/>, document.getElementById('crowd-o-container'));

Reveal.addEventListener( 'slidechanged', function( event ) {
    switch(event.currentSlide.id) {
    case "crowd-o-demo":
    case "crowd-o-section":
        crowdOMeter.show(true);
        break;
    default:
        crowdOMeter.show(false);
    }
} );

Reveal.addEventListener( 'fragmentshown', function( event ) {
    // event.fragment = the fragment DOM element
    var el = event.fragment;
    if(el.id === "end-logo") {
        var img = document.getElementById('end-logo-img');
        img.style.top = 0;
    }
} );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
    // event.fragment = the fragment DOM element
    var el = event.fragment;
    if(el.id === "end-logo") {
        var img = document.getElementById('end-logo-img');
        img.style.top = "200vh";
    }
} );


React.initializeTouchEvents(true);
