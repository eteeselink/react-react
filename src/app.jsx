
require("normalize.css/normalize.css");
require("./global.styl");
require("./typography.styl");

//require("model/Root");

var View = require("./view/view");

var view = new View();
React.renderComponent(view,
  document.getElementById('hello')
);

