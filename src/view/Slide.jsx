require("./Slide.styl");

var Slide = React.createClass({
    render() {
        return <div className="Slide">
            {this.props.title && <h1>{this.props.title}</h1>}
            {this.props.children}
        </div>;
    }
});

module.exports = Slide;
