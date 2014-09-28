require("./ModalDialog.styl");
var Button = require("./Button");

var ModalDialog = React.createClass({
    propTypes: {
        target: React.PropTypes.string,
        onClose: React.PropTypes.func
    },

    render() {
        return (
            <div className="ModalDialog">
                <p>{this.props.children}</p>
                <Button onClick={this.props.onClose}>{this.props.okText}</Button>
            </div>
        );
    }
});

module.exports = ModalDialog;
