import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask';


class Todos extends Component {
    pendingTasksMessage() {
        const count = this.pendingTasksCount();

        if (count === 0) {
            return `You are all done! 🎉`;
        }

        return `Pending tasks: ${count}`;
    }
    pendingTasksCount() {
        return this.props.tasks.filter(t => !t.completed).length;
    }
    pendingTasksCssClass() {
        return `float-right ${this.pendingTasksCount() === 0 ? 'highlight' : ''}`;
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="mb-3">Todos <small className={this.pendingTasksCssClass()}>{this.pendingTasksMessage()}</small></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <AddTask
                        addTask={this.props.addTask}
                    ></AddTask>
                    </div>
                </div>
                {this.props.tasks.map((task) =>
                    <Task 
                        key={task.id}
                        task={task}
                        toggleTaskDone={this.props.toggleTaskDone}
                        deleteTask={this.props.deleteTask}
                    ></Task>
                )}
            </div>
        );
    }
}

export default Todos;