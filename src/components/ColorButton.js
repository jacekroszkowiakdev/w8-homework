// Create a Pure Component called ColorButton. It should have a button that changes the background color
import React, { PureComponent } from "react";
import withColor from "./withColor";

class ColorButton extends PureComponent {
    render() {
        const { color, toggleColor } = this.props;
        return (
            <button
                style={{ backgroundColor: this.props.color }}
                onClick={this.props.toggleColor}
            >
                Change color
            </button>
        );
    }
}

export default withColor(ColorButton);
