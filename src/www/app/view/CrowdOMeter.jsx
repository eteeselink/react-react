require("./CrowdOMeter.styl");

var Counter = require("./Counter");
var HeadCounts = require("model/HeadCounts.jsx");

var CrowdOMeter = React.createClass({
    getInitialState() {
        return { 
            visible: false,
            headCounts: new HeadCounts(() => this.forceUpdate()),
        };
    },

    show(vis) {
        this.setState({visible: vis});
    },

    render() {
        var style = {
            top: this.state.visible ? "35vh" : "200vh",
        };
        var headCounts = this.state.headCounts;
        // var total = headCounts.html.amount() + 
        //             headCounts.js10.amount() +
        //             headCounts.js500.amount();

        return <div id="crowd-o-app" style={style} className="CrowdOMeter react-app">
            <div>
            <Counter headCount={headCounts.html} initiallyVisible={true}>HTML</Counter>
            <Counter headCount={headCounts.js10}>JavaScript<br/>(>10 LOC)</Counter>
            <Counter headCount={headCounts.js500}>JavaScript<br/>(>500 LOC)</Counter>
            </div>
            {/*<p>Total: {total}</p>*/}
        </div>;
    }
});

module.exports = CrowdOMeter;
