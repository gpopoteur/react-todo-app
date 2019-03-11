import React, { Component } from 'react';
import TaskCheckbox from './TaskCheckbox';

class Task extends Component {
    toggleCheckbox() {
        this.props.toggleTaskDone(this.props.task);
    }
    deleteTask(e) {
        e.stopPropagation();
        this.props.deleteTask(this.props.task);
    }
    taskCssClass() {
        return `card mb-2 task ${this.props.task.completed ? 'bg-light text-muted' : ''}`;
    }
    render() {
        return (
            <div className={this.taskCssClass()} onClick={this.toggleCheckbox.bind(this)}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <TaskCheckbox 
                                task={this.props.task}
                            ></TaskCheckbox>
                            <span className={this.props.task.completed ? 'line-through' : ''}>{this.props.task.content}</span>
                            <button type="button" className="close" aria-label="Close" onClick={this.deleteTask.bind(this)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;