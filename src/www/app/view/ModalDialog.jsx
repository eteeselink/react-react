require("./ModalDialog.styl");
var Button = require("./Button");

var ModalDialog = React.createClass({
    propTypes: {
        target: React.PropTypes.string,
        okText: React.PropTypes.string
    },

    render() {
        return (
            <div className="ModalDialog">
                <p>{this.props.children}</p>
                <Button target={this.props.target}>{this.props.okText}</Button>
            </div>
        );
    }
});

module.exports = ModalDialog;
