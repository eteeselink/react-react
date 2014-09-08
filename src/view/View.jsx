require("./View.styl");

var Slide = require("Slide.jsx");

var View = React.createClass({
    getInitialState() {
        return {
            slide: 0,
            moving: 0
        };
    },

    move(where) {
        this.props.goSlide(this.state.slide + where);
    },

    next() {
        this.move(1);
    },

    touch(evt) {
        var pos = evt.changedTouches[0].screenX;
        this.move(pos > (window.screen.availWidth/2) ? 1 : -1);
    },

    slides: [
        (pos) => 
            <Slide pos={pos} title="Hello">
                <p>Hi</p>
                <ul>
                    <li>Dingen</li>
                    <li>Dongen</li>
                    <li>Dangen</li>
                </ul>
            </Slide>,
        (pos) => <Slide pos={pos} title="Hello2">
                    <ul>
                        <li>Dingen</li>
                        <li>Dongen</li>
                        <li>Dangen</li>
                    </ul>
                </Slide>,
        (pos) => <Slide pos={pos} title="Hello3"/>,
    ],


    render() {
        var slideId = this.state.slide;

        var rot90 = (slideId) ? "90" : "";
        return <div className="View" onTouchEnd={this.touch}>
            <div className={"Cube"}>
                {/*this.slides[0]("left")*/}
                {this.slides[1]("mid" + rot90)}
                {this.slides[2]("right" + rot90)}
            </div>
        </div>;
    }
});

module.exports = View;
