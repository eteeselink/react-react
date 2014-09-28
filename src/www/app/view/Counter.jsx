require("./Counter.styl");

var ModalDialog = require("./ModalDialog");

var Counter = React.createClass({
    
    propTypes: {
        initiallyVisible: React.PropTypes.bool,
    },

    getInitialState() {
        return { 
            visible: !!this.props.initiallyVisible,
            dialogVisible: false
        };
    },

    closeDialog() {
        this.setState({dialogVisible: false});
    },

    render() {
        if(!this.state.visible) {
            return <div className="Counter" onClick={this.show}/>;
        }

        var [upStyle, downStyle] = this.computeStyles();

        var dialog = null;
        if(this.state.dialogVisible) {
            dialog = <ModalDialog okText="really." onClose={this.closeDialog}>Nobody? :-(</ModalDialog>;
        }
        
        return <div className="Counter">
            <div className="bar up" style={upStyle} onMouseDown={this.up}/>
            <div className="bar down" style={downStyle} onMouseDown={this.down}>
                {this.props.headCount.amount()}
            </div>
            <p>{this.props.children}</p>
            {dialog}
        </div>;
    },

    change(offset) {
        var amount = this.props.headCount.amount() + offset;
        if(amount === 0)
        {
            this.setState({dialogVisible: true});
        }
        this.props.headCount.setAmount(amount);
    },

    up() {
        this.change(1);
        return false;
    },

    down() {
        this.change(-1);
        return false;
    },

    show() {
        this.setState({visible: true});
    },

    computeStyles() {
        var height = (30 * this.props.headCount.amount()) / this.props.headCount.total();
        var offset = 30 - height;

        var upStyle = {
            height: offset + "vh"
        };
        var downStyle = {
            height: height + "vh", 
            paddingTop: (height*0.3) + "vh"
        };
        return [upStyle, downStyle];
    },
});


module.exports = Counter;
