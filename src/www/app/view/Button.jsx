require("./Button.styl");

var Button = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func
    },

    render() {
        return (
            <a onClick={this.props.onClick} className="Button">
                <div>{this.props.children}</div>
            </a>
        );
    }
});

module.exports = Button;
