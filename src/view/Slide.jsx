require("./Slide.styl");

var Slide = React.createClass({
    render() {
        return <div id={"slide_"+this.props.id} className={"Slide " + this.props.pos}>
            {this.props.title && <h1>{this.props.title}</h1>}
            <div className="body">
                {this.props.children}
            </div>
        </div>;
    }
});

module.exports = Slide;
