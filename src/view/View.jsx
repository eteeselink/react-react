require("./View.styl");

var Slide = require("Slide.jsx");

var View = React.createClass({
    getInitialState() {
        return {
            slide: 0
        };
    },

    componentWillMount() {
        document.onkeydown = (evt) => {
            if(evt.keyCode===32) {
                this.next();
            }
        };
    },

    move(where) {
        this.setState({slide: this.state.slide + where});
    },

    next() {
        this.move(1);
    },

    render() {
        var slides = [
            <Slide title="Hello"/>,
            <Slide title="Hello2"/>,
        ];

        return <div onClick={this.next} className="View">
            {slides[this.state.slide]}
        </div>;
    }
});

module.exports = View;
