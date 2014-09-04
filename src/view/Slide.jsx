require("./Slide.styl");

var Slide = React.createClass({
    render() {
        return <div className="Slide">
            {this.props.title && <h1>{this.props.title}</h1>}
            <div className="body">
                {this.props.children}
            </div>
        </div>;
    }
});

module.exports = Slide;
