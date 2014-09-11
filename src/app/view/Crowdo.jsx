require("./Crowdo.styl");

var Counter = require("./Counter");

var Crowdo = React.createClass({
    getInitialState() {
        return { opacity: 0 };
    },
    show(op) {
        this.setState({opacity: op});
    },
    render() {
        return <div id="crowd-o-app" style={{opacity: this.state.opacity}} className="Crowdo react-app">
            <Counter initiallyVisible={true}>HTML</Counter>
            <Counter>JavaScript<br/>(>10 LOC)</Counter>
            <Counter>JavaScript<br/>(>500 LOC)</Counter>
        </div>;
    }
});

module.exports = Crowdo;
