
require("normalize.css/normalize.css");
require("./global.styl");
require("./typography.styl");

//require("model/Root");

var View = require("./view/View");
var view;

React.initializeTouchEvents(true);
view = React.renderComponent(<View/>,
  document.getElementById('hello')
);

window.onkeydown = (evt) => {
    if(evt.keyCode===32) {
        view.next();
        return false;
    }
};
