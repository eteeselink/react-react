require("./Counter.styl");


var Counter = React.createClass({
    total: 40,

    getInitialState() {
        return { 
            amount: this.total,
            visible: !!this.props.initiallyVisible
        };
    },
    change(offset) {
        this.setState({amount: this.state.amount + offset});
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

    render() {
        if(!this.state.visible) {
            return <div className="Counter" onClick={this.show}/>;
        }

        var [upStyle, downStyle] = this.computeStyles();
        return <div className="Counter">
            <div className="bar up" style={upStyle} onMouseDown={this.up}/>
            <div className="bar down" style={downStyle} onMouseDown={this.down}>
                {this.state.amount}
            </div>
            <p>{this.props.children}</p>
        </div>;
    },

    computeStyles() {
        var height = (30 * this.state.amount) / this.total;
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
