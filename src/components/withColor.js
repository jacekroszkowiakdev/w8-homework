import React from "react";

const withColor = (WrappedComponent) => {
    class WithColor extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                color: "white",
            };
        }

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
    }

    return WithColor;
};

export default withColor;
