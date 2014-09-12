require("./Crowdo.styl");

var Counter = require("./Counter");
var HeadCounts = require("model/HeadCounts.jsx");

var Crowdo = React.createClass({
    getInitialState() {
        return { 
            visible: false,
            model: new HeadCounts(() => this.forceUpdate()),
        };
    },

    show(vis) {
        this.setState({visible: vis});
    },

    render() {
        var style = {
            top: this.state.visible ? "35vh" : "200vh",
        };

        return <div id="crowd-o-app" style={style} className="Crowdo react-app">
            <Counter headCount={this.state.model.html} initiallyVisible={true}>HTML</Counter>
            <Counter headCount={this.state.model.js10}>JavaScript<br/>(>10 LOC)</Counter>
            <Counter headCount={this.state.model.js500}>JavaScript<br/>(>500 LOC)</Counter>
        </div>;
    }
});

module.exports = Crowdo;
