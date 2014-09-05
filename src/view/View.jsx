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
            <Slide pos="left" title="Hello">
                <p>Hi</p>
                <ul>
                    <li>Dingen</li>
                    <li>Dongen</li>
                    <li>Dangen</li>
                </ul>
            </Slide>,
        () => <Slide pos="mid" title="Hello2"/>,
        () => <Slide pos="right" title="Hello3"/>,
    ],


    render() {
        var slide = this.slides[this.state.slide];
        return <div className="View">
            <div className="Cube">
                {/*slide && slide()*/}
                {this.slides[2]()}
                {this.slides[1]()}
                {this.slides[0]()}
            </div>
        </div>;
    }
});

module.exports = View;
