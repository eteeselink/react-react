require("./Button.styl");

var Button = React.createClass({
    render() {
        return (
            <a href={this.props.target} className="Button">
                <div>{this.props.children}</div>
            </a>
        );
    }
});

module.exports = Button;
