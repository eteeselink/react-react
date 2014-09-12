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

React.initializeTouchEvents(true);
