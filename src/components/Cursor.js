import React, { Component } from 'react';

class Cursor extends Component {
    state = { x: 0, y: 0 }
    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
    }
    render() {
        const { x, y } = this.state
        return (
            <div className="mouseArea" onMouseMove={this.handleMouseMove}>
                <div className="mouseInfo">
                    The current mouse position is ({x}, {y})
                </div>
            </div>
        )
    }
}

export default Cursor;
