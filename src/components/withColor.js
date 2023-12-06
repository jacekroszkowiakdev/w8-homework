import React from "react";

export function withColor(WrappedComponent) {
    return class extends React.Component {
        state = {
            color: "white",
        };

        toggleColor = () => {
            this.setState(
                (prevState) => ({
                    color: prevState.color === "white" ? "black" : "white",
                }),
                console.log("onClick check")
            );
        };

        render() {
            return (
                <WrappedComponent
                    color={this.state.color}
                    toggleColor={this.toggleColor}
                    {...this.props}
                />
            );
        }
    };
}

export default withColor;
