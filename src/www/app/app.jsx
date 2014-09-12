/* global Reveal */

//require("normalize.css/normalize.css");
require("./global.styl");
require("./typography.styl");

// dummy require so that dev server reloads on index.html changes
require("raw!../index.html");

var Crowdo = require("./view/Crowdo");
var crowdo = React.renderComponent(<Crowdo/>, document.getElementById('crowd-o-container'));

Reveal.addEventListener( 'slidechanged', function( event ) {
    switch(event.currentSlide.id) {
    case "crowd-o-section":
        crowdo.show(true);
        break;
    default:
        crowdo.show(false);
    }
} );

React.initializeTouchEvents(true);
