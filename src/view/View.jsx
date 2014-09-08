require("./View.styl");

var Slide = require("Slide.jsx");

var View = React.createClass({
    getInitialState() {
        return {
            slide: 0,
            moving: 0
        };
    },

    goSlide(newSlide) {        
        this.setState({moving: newSlide - this.state.slide});
        setTimeout(() => {
            this.setState({
                moving: 0,
                slide: newSlide
            });
            
        }, 2000);
    },

    move(where) {
        this.goSlide(this.state.slide + where);
    },

    next() {
        this.move(1);
    },

    touchOrClick(posX, isClick) {
        var threshold = (isClick ? 0 : (window.innerWidth * 7) / 8);
        if(Math.abs(posX -  (window.innerWidth/2)) > threshold) {
            this.move(posX > (window.innerWidth/2) ? 1 : -1);
        }
    },

    touch(evt) {
        var pos = evt.changedTouches[0].screenX;
        this.touchOrClick(pos, false);
        return false;
    },

    click(evt) {
        var pos = evt.screenX;
        this.touchOrClick(pos, true);
        return false;
    },

    slides: [
        (id, pos) => 
            <Slide id={id} pos={pos} title="Hello">
                <p>Hi</p>
                <ul>
                    <li>Dingen</li>
                    <li>Dongen</li>
                    <li>Dangen</li>
                </ul>
            </Slide>,
        (id, pos) => <Slide id={id} pos={pos} title="Hello2">
                    <ul>
                        <li>Dingen</li>
                        <li>Dongen</li>
                        <li>Dangen</li>
                    </ul>
                </Slide>,
        (id, pos) => <Slide id={id} pos={pos} title="Hello3"/>,
    ],


    render() {
        var mid = this.state.slide;

        // var fromTo = this.state.moving;
        // if(moving) {
        //     console.log(fromTo);
        //     var rot90 = (slideId) ? "90" : "";
        //     return <div className="View" onTouchEnd={this.touch}>
        //         <div className="Cube">
        //             {/*this.slides[0]("left")*/}
        //             {this.slides[fromTo[0]]("mid" + rot90)}
        //             {this.slides[fromTo[1]]("right" + rot90)}
        //         </div>
        //     </div>;
        // }
        var rot = (this.state.moving < 0) ? "-90 moving"
                : (this.state.moving > 0) ? "90 moving"
                : "";

        var left = mid - 1;
        var right = mid + 1;
        return <div className="View" onTouchEnd={this.touch} onClick={this.click}>
            <div className="Cube">
                {left >= 0 &&                  this.slides[left](left, "left" + rot)}
                {                              this.slides[mid](mid, "mid" + rot)}
                {right < this.slides.length && this.slides[right](right, "right" + rot)}
            </div>
        </div>;
    }
});

module.exports = View;
