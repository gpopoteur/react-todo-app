import React, { Component } from 'react';

class TaskCheckbox extends Component {
    render() {
        return (
            <span className="mr-2">
                {this.props.task.completed ? (
                    <i className="fas fa-check-circle task-done"></i>
                ) : (
                    <i className="far fa-circle"></i>
                )}
            </span>
        );
    }
}

export default TaskCheckbox;