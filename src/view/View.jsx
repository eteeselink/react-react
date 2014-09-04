require("./View.styl");

var Slide = require("Slide.jsx");

var View = React.createClass({
    getInitialState() {
        return {
            slide: 0
        };
    },

    move(where) {
        this.props.goSlide(this.state.slide + where);
    },

    next() {
        this.move(1);
    },

    slides: [
        () => 
            <Slide title="Hello">
                <p>Hi</p>
                <ul>
                    <li>Dingen</li>
                    <li>Dongen</li>
                    <li>Dangen</li>
                </ul>
            </Slide>,
        () => <Slide title="Hello2"/>,
        () => <Slide title="Hello3"/>,
    ],


    render() {
        var slide = this.slides[this.state.slide];
        return <div onClick={this.next} className="View">
            {slide && slide()}
        </div>;
    }
});

module.exports = View;
