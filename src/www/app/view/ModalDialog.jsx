require("./ModalDialog.styl");
var Button = require("./Button");

var ModalDialog = React.createClass({
    render() {
        return (
            <div class="ModalDialog">
                <p>{this.props.children}</p>
                <Button target={this.props.target}>{this.props.okText}</Button>
            </div>
        );
    }
});

module.exports = ModalDialog;
