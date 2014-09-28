require("./Button.styl");

var Button = React.createClass({
    propTypes: {
        target: React.PropTypes.string
    },

    render() {
        return (
            <a href={this.props.target} className="Button">
                <div>{this.props.children}</div>
            </a>
        );
    }
});

module.exports = Button;
