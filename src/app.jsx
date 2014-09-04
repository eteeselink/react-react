
require("normalize.css/normalize.css");
require("./global.styl");
require("./typography.styl");

//require("model/Root");

var View = require("./view/View");
var view;

function getSlideId() {
    return parseInt(location.hash.substr(1));
}

function go(slideId) {
    if(slideId > 0 && slideId < view.slides.length) {
        location.assign("#" + slideId);
    }
}

view = React.renderComponent(<View goSlide={go} getSlideId={getSlideId}/>,
  document.getElementById('hello')
);

window.onkeydown = (evt) => {
    if(evt.keyCode===32) {
        view.next();
        return false;
    }
};

function checkHash() {
    var slide = getSlideId();
    if(isNaN(slide) || (slide < 0)) { // if negative or NaN
        location.assign("#0");
        return;
    }
    if(slide >= view.slides.length) {
        location.assign("#" + (view.slides.length - 1));
        return;
    }

    view.setState({slide: slide});
}

window.onhashchange = checkHash;
setTimeout(checkHash, 0);
